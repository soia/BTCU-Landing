/* eslint-disable */
const Deployer = require('ssh-deploy-release');

const options = {
    localPath: 'build',
    host: '178.32.186.238',
    username: 'front-dev-2',
    password: require('./keys').PROD_PASSWORD,
    deployPath: '/home/front-dev-2',
    port: '22001',
    releasesToKeep: 3,
    currentReleaseLink: 'btcu.io',
    onBeforeLink: context => `chmod -R g+rx ${context.release.path}`,
};

const deployer = new Deployer(options);
deployer.deployRelease(() => {
    // console.log('Ok !')
});
