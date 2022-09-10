import React from 'react';

import './home.scss';

import Header from '@components/Header';
import Navigation from './Navigation';
import SideBar from './SideBar';
import ProductsBlock from './ProductsBlock';

const Home = () => {
    return (
        <div>
            <Header />
            <div className="home-wrapper">
                <div className="home-container">
                    <div className="home-sideBox">
                        <SideBar />
                        <Navigation />
                    </div>
                    <div className="home-mainBox">
                        <ProductsBlock />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
