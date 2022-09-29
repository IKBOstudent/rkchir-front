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
