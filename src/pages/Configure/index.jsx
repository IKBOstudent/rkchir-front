import React from 'react';

import './configure.scss';

import Header from '@components/Header';
import Footer from '@components/Footer';

import Navigation from './Navigation';
import ItemsBlock from './ItemsBlock';

const Configure = () => {
    return (
        <>
            <Header />
            <main>
                <article className="configure-container">
                    <Navigation />

                    <section className="configure-list">
                        <ul>
                            <li>
                                <a href="#">CPU</a>
                            </li>
                            <li>
                                <a href="#">Video Card</a>
                            </li>
                            <li>
                                <a href="#">Motherboard</a>
                            </li>
                            <li>
                                <a href="#">CPU Cooling</a>
                            </li>
                            <li>
                                <a href="#">RAM</a>
                            </li>
                            <li>
                                <a href="#">Storage</a>
                            </li>
                            <li>
                                <a href="#">PowerSupply</a>
                            </li>
                            <li>
                                <a href="#">Case</a>
                            </li>
                        </ul>
                    </section>
                    <section className="configure-items">
                        <ItemsBlock />
                    </section>
                </article>
            </main>
            <Footer />
        </>
    );
};

export default Configure;
