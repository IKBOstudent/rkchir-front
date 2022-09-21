import React from 'react';

import './catalog.scss';

import Header from '@components/Header';
import Footer from '@components/Footer';

import ProductsBlock from './ProductsBlock';
import Filters from './Filters';

const Catalog = () => {
    return (
        <>
            <Header />
            <main>
                <article className="catalog-container">
                    <section className="catalog-filters">
                        <Filters />
                    </section>
                    <section className="catalog-content">
                        <ProductsBlock />
                    </section>
                </article>
            </main>
            <Footer />
        </>
    );
};

export default Catalog;
