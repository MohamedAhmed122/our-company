import React, { Fragment } from 'react'
import HomeCustom from '../../Component/CustomDevlopment/HomeCustom/HomeCustom';
import HomeMobileApp from '../../Component/MobileApp/HomeMobileApp/HomeMobileApp';
import HomeWeb from '../../Component/WebDevlopment/HomeWeb/HomeWeb';

const ServicePage =()=>{
    return(
        <Fragment>
            <HomeCustom />
            <HomeMobileApp />
            <HomeWeb />
        </Fragment>
    )
}

export default ServicePage;