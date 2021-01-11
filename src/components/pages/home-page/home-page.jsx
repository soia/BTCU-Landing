import React, { Fragment } from 'react';
import FirstScreen from './first-screen';
import Community from './community';
import AboutUs from './about-us/about-us';
import Advantages from './advantages';
import Airdrop from './airdrop';
import Media from './media';
import Partners from './partners';

const HomePage = () => (
    <Fragment>
        <FirstScreen />
        <Community />
        <AboutUs />
        <Advantages />
        <Airdrop />
        <Media />
        <Partners />
    </Fragment>
);

export default HomePage;
