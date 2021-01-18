/* eslint-disable */
const Deployer = require('ssh-deploy-release');

const options = {
    localPath: 'build',
    host: 'devnew.btcu.io',
    username: 'front-dev-2',
    password: require('./keys').DEV_PASSWORD,
    deployPath: '/home/front-dev-2',
    port: '22142',
    releasesToKeep: 3,
    currentReleaseLink: 'btcu.io',
    onBeforeLink: context => `chmod -R g+rx ${context.release.path}`,
};

const deployer = new Deployer(options);
deployer.deployRelease(() => {
    // console.log('Ok !')
});
