import React, { Fragment } from 'react';
import Hero from '../../Component/hero/hero';
import HomeCustom from '../../Component/CustomDevlopment/HomeCustom/HomeCustom';
import HomeMobileApp from '../../Component/MobileApp/HomeMobileApp/HomeMobileApp';
import HomeWeb from '../../Component/WebDevlopment/HomeWeb/HomeWeb'
import HomeRev from '../../Component/Revolution/HomeREV/HomeRev';
import HomeContact from '../../Component/ContactUS/HomeContact/HomeContact';

const HomePage =()=>(
    <Fragment>
        <Hero />
        <HomeCustom />
        <HomeMobileApp />
        <HomeWeb />
        <HomeRev />
        <HomeContact />
    </Fragment>
) 
export default HomePage