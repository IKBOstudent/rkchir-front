import React from "react";

import "./catalog.scss";

import Header from "@components/Header";
import Footer from "@components/Footer";

import ProductsBlock from "./ProductsBlock";

const Catalog = () => {
    return (
        <>
            <Header />
            <main>
                <article className="catalog-container">
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
