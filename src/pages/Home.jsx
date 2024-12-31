import React from 'react';
import Banner from '../components/Banner';
import Skills from '../components/Skills';
import VisiMission from '../components/VisiMission';
import PricingPlans from '../components/PricingPlans';

const Home = () => {
    return (
        <div>
            <Banner />
            <Skills />
            <PricingPlans />
            <VisiMission />
        </div>
    );
};

export default Home;