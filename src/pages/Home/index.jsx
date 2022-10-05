import React from 'react';

import './home.scss';

import Header from '@components/Header';
import Footer from '@components/Footer';

import BuildsBlock from './BuildsBlock';
import CategoriesBlock from './CategoriesBlock';

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <article className="home-container">
                    <iframe
                        autoplay
                        height="400"
                        // src="https://www.example.com/"
                        src="https://www.youtube.com/embed/nNiA1zLuvuw?autoplay=0&origin=http://example.com&controls=0&rel=1`"
                        allow="autoplay; encrypted-media"
                        allowfullscreen
                        title="video"
                        frameborder="0"></iframe>

                    <section className="home-builds">
                        <BuildsBlock />
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
