import React from 'react';

import './home.scss';

import Header from '@components/Header';
import Footer from '@components/Footer';

import BuildsBlock from './BuildsBlock';
import CategoriesBlock from './CategoriesBlock';

import poster1 from '@assets/poster1.png';
import poster2 from '@assets/poster2.jpg';

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <article className="home-container">
                    <section className="home-builds">
                        <BuildsBlock />
                    </section>

                    <section className="home-posters">
                        <a href="#">
                            <img src={poster1} />
                        </a>
                        <a href="#">
                            <img src={poster2} />
                        </a>
                    </section>

                    <section className="home-categories">
                        <CategoriesBlock />
                    </section>
                </article>
            </main>
            <Footer />
        </>
    );
};

export default Home;
