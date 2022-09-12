import React from 'react';

import './home.scss';

import Header from '@components/Header';
import Footer from '@components/Footer';
import Navigation from './Navigation';
import ProductsBlock from './ProductsBlock';

const Home = () => {
    return (
        <div>
            <Header />
            <div className="home-wrapper">
                <div className="home-container">
                    <div className="home-sideBox">
                        <Navigation />
                    </div>
                    <div className="home-mainBox">
                        <ProductsBlock />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
