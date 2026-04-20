const fs = require('fs');

const authConfig = `//jfrog.elhub.cloud/artifactory/api/npm/elhub-npm-release-local/:_auth=${process.env.NPM_BASE64AUTH}
//jfrog.elhub.cloud/artifactory/api/npm/elhub-npm-release-local/:email=${process.env.NPM_EMAIL}
//jfrog.elhub.cloud/artifactory/api/npm/elhub-npm-release-local/:always-auth=true
`;

fs.appendFile(`.npmrc`, authConfig, (error) => {
  if (error) console.error(`Error: ${error}`);
  else console.log('Successfully applied authentication configuration for npm!');
});
