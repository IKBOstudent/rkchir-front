import React from "react";

import "./configure.scss";

import Header from "@components/Header";
import Footer from "@components/Footer";

import Navigation from "./Navigation";
import MenuBlock from "./MenuBlock";
import ItemsBlock from "./ItemsBlock";

const Configure = () => {
    return (
        <>
            <Header />
            <main>
                <div className="configure-container">
                    <nav className="configure-nav">
                        <Navigation />
                    </nav>
                    <article className="configure-content">
                        <section className="configure-content-menu">
                            <MenuBlock />
                        </section>
                        <section className="configure-content-items">
                            <ItemsBlock />
                        </section>
                    </article>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Configure;
