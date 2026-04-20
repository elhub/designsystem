import jetbrains.buildServer.configs.kotlin.ArtifactRule
import jetbrains.buildServer.configs.kotlin.buildSteps.nodeJS
import no.elhub.devxp.build.configuration.pipeline.constants.AgentScope.LinuxAgentContext
import no.elhub.devxp.build.configuration.pipeline.constants.Group.UI
import no.elhub.devxp.build.configuration.pipeline.constants.JFrog
import no.elhub.devxp.build.configuration.pipeline.dsl.elhubProject
import no.elhub.devxp.build.configuration.pipeline.dsl.interfaces.JobOperations
import no.elhub.devxp.build.configuration.pipeline.extensions.addAllCommitsToMainTrigger
import no.elhub.devxp.build.configuration.pipeline.extensions.addArtifactDependencies
import no.elhub.devxp.build.configuration.pipeline.jobs.bucketPublisher
import no.elhub.devxp.build.configuration.pipeline.jobs.customJob
import no.elhub.devxp.build.configuration.pipeline.jobs.npmVerify

elhubProject(UI, "elhub-ui-design-system") {
    pipeline {
        sequential {
            val artifacts = npmVerify {
                buildArtifactRules = listOf(ArtifactRule.include("ds-www/build", "ds-www.zip")) // For Publish
                outputArtifactRules = listOf(ArtifactRule.include("ds-www.zip!**", "ds-www/build")) // For Publish

                sonarScanSettings = {
                    sonarProjectSources = "ds-www/src"
                    sonarProjectTests = null
                }
                npmParams.add("--userconfig=./.tc.npmrc")

                analyzeDependencies = false
            }

            publishPackagesUsingChangesets()

            bucketPublisher {
                buildTypeName = "🦚 Publish DS"
                sourceDir = "ds-www/build"
                appName = "design"
            }.apply {
                addArtifactDependencies(listOf(artifacts))
                addAllCommitsToMainTrigger()
            }
        }
    }
}

fun JobOperations.publishPackagesUsingChangesets() = customJob(LinuxAgentContext) {
    id("PublishPackagesUsingChangesets")
    name = "🎨 Publish packages"

    steps {
        nodeJS {
            name = "Install dependencies"
            shellScript = "npm run install:all --userconfig=./.tc.npmrc"
            dockerImage = JFrog.Images.NODE
        }

        nodeJS {
            name = "Build packages"
            shellScript = "npm run build"
            dockerImage = JFrog.Images.NODE
        }

        nodeJS {
            name = "Publish packages if there are changesets"
            shellScript = "npm run publish --userconfig=./.tc.npmrc"
            dockerImage = JFrog.Images.NODE
        }
    }
}
