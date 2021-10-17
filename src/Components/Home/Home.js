import React from 'react';
import Banner from './Banner/Banner';
import Foods from './Foods/Foods';
import WhyChoose from './WhyChoose/WhyChoose';

const Home = () => {
    return (
        <div>
            <Banner />
            <Foods/>
            <WhyChoose />
        </div>
    );
};

export default Home;