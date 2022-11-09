import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import Delevary from '../Delevary/Delevary';
import Favorites from '../Favorites/Favorites';
import HomeDelevary from '../HomeDelevary/HomeDelevary';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Delevary></Delevary>
            <Favorites></Favorites>
            <HomeDelevary></HomeDelevary>
        </div>
    );
};

export default Home;