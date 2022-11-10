import React from "react";

import "./configure.scss";

import Header from "@components/Header";
import Footer from "@components/Footer";

import Navigation from "./Navigation";
import MenuBlock from "./MenuBlock";
import ItemsBlock from "./ItemsBlock";
import FiltersBlock from "./FiltersBlock";

const categories = ["System", "Peripherals", "Customization", "Other"];

const Configure = () => {
    const [category, setCategory] = React.useState(categories[0]);

    return (
        <>
            <Header />
            <main>
                <div className="configure-container">
                    <nav className="configure-nav">
                        <Navigation
                            categories={categories}
                            selectedCategory={category}
                            setCategory={name => setCategory(name)}
                        />
                    </nav>
                    <section className="configure-menu">
                        <MenuBlock />
                    </section>
                    <article className="configure-content">
                        <section className="configure-content-filters">
                            <FiltersBlock />
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
