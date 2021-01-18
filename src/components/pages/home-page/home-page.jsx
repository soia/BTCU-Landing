import React, { Fragment } from 'react';
import FirstScreen from './first-screen';
import Community from './community';
import AboutUs from './about-us/about-us';
import Advantages from './advantages';
import Airdrop from './airdrop';
import Ambassadors from './ambassadors';
import Team from './team';
import Media from './media';
import Partners from './partners';
import Development from './development';
import Subscribe from './subscribe/subscribe';


const HomePage = () => (
    <Fragment>
        <FirstScreen />
        <Community />
        <AboutUs />
        <Advantages />
        <Airdrop />
        <Team />
        <Ambassadors />
        <Partners />
        <Media />
        <Development />
        <Subscribe />
    </Fragment>
);

export default HomePage;
