import React, { Fragment } from 'react';
import FirstScreen from './first-screen';
import Community from './community';
import AboutUs from './about-us/about-us';
import Advantages from './advantages';

const HomePage = () => (
    <Fragment>
        <FirstScreen />
        <Community />
        <AboutUs />
        <Advantages />
    </Fragment>
);

export default HomePage;
