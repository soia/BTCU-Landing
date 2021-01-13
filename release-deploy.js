#!/usr/bin/env node

// eslint-disable-next-line
const Deployer = require('ssh-deploy-release');

const options = {
    localPath: 'build',
    host: 'devnew.btcu.io',
    username: 'front-dev-2',
    password: 'qzahxynw1BlV1jTUcr2zgoQ6',
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
