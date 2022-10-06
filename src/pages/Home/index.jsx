import React from "react";

import "./home.scss";

import Header from "@components/Header";
import Footer from "@components/Footer";

import BuildsBlock from "./BuildsBlock";
import CategoriesBlock from "./CategoriesBlock";

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <article className="home-container">
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
