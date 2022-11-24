import React from "react";

import "./configure.scss";

import Header from "@components/Header";
import Footer from "@components/Footer";

import Navigation from "./Navigation";
import MenuBlock from "./MenuBlock";
import ItemsBlock from "./ItemsBlock";
import FiltersBlock from "./FiltersBlock";

const options = [
    { name: "System", items: ["CPU"] },
    { name: "Peripherals", items: ["Monitor"] },
    { name: "Customization", items: ["Glass Print"] },
    { name: "Other", items: ["OS"] },
];

export const FilterContext = React.createContext();
export const SortContext = React.createContext();

const Configure = () => {
    const [category, setCategory] = React.useState(0);
    const [option, setOption] = React.useState(0);

    // console.log(options[category].name, options[category].items[option]);

    const [filter, setFilter] = React.useState({ type: 0, values: [0] });
    const [sort, setSort] = React.useState({ name: "popular", asc: false });

    return (
        <FilterContext.Provider value={{ filter, setFilter }}>
            <SortContext.Provider value={{ sort, setSort }}>
                <Header />
                <main>
                    <div className="configure-container">
                        <nav className="configure-nav">
                            <Navigation
                                categories={options.map(item => item.name)}
                                selectedCategory={category}
                                setCategory={id => {
                                    setCategory(id);
                                    setOption(0);
                                }}
                            />
                        </nav>
                        <section className="configure-menu">
                            <MenuBlock
                                options={options[category].items}
                                selectedOption={option}
                                setOption={id => setOption(id)}
                            />
                        </section>
                        <article className="configure-content">
                            <section className="configure-content-filters">
                                <FiltersBlock />
                            </section>
                            <section className="configure-content-items">
                                <ItemsBlock currentCategory={category} currentOption={option} />
                            </section>
                        </article>
                    </div>
                </main>
                <Footer />
            </SortContext.Provider>
        </FilterContext.Provider>
    );
};

export default Configure;
