import React from "react";

import "./home.scss";

import Header from "@components/Header";
import Footer from "@components/Footer";
import Navigation from "./Navigation";

import BuildsBlock from "./BuildsBlock";
import CategoriesBlock from "./CategoriesBlock";
import ProductsBlock from "./ProductsBlock";

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <article className="home-container">
                    <section className="home-nav">
                        <Navigation />
                    </section>

                    <section className="home-content">
                        <BuildsBlock />
                        <CategoriesBlock />
                        <ProductsBlock />
                    </section>
                </article>
            </main>
            <Footer />
        </>
    );
};

export default Home;
