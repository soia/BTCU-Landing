import React, { Fragment } from 'react';
import FirstScreen from './first-screen';
import Community from './community';
import AboutUs from './about-us/about-us';
import Advantages from './advantages';
import Airdrop from './airdrop';

const HomePage = () => (
    <Fragment>
        <FirstScreen />
        <Community />
        <AboutUs />
        <Advantages />
        <Airdrop />
    </Fragment>
);

export default HomePage;
