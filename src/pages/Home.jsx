import React from 'react';
import Banner from './Home/Banner';
import Service from './Home/Service';
import HowWorks from './Home/howWorks';
import Brands from './Home/Brands';
import Reviews from './Home/Reviews';

 const ReviewsPromise = fetch('/reviews.json') 
 .then(res => res.json())
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowWorks></HowWorks>
            <Service></Service>
            <Brands></Brands>
            <Reviews ReviewsPromise={ReviewsPromise}></Reviews>
        </div>
    );
};

export default Home;