import jetbrains.buildServer.configs.kotlin.ArtifactRule
import no.elhub.devxp.build.configuration.pipeline.constants.Group.UI
import no.elhub.devxp.build.configuration.pipeline.constants.JFrog
import no.elhub.devxp.build.configuration.pipeline.dsl.elhubProject
import no.elhub.devxp.build.configuration.pipeline.extensions.addAllCommitsToMainTrigger
import no.elhub.devxp.build.configuration.pipeline.extensions.addArtifactDependencies
import no.elhub.devxp.build.configuration.pipeline.jobs.bucketPublisher
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
                analyzeDependencies = false
            }

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

