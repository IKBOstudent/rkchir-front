import React from "react";

import "./calculator-bottleneck.scss";

import Header from "@components/Header";
import Footer from "@components/Footer";

const CalculatorBottleneck = () => {
    return (
        <>
            <Header />
            <main>
                <article className="calc-bottleneck-container">
                    <section>
                        <form>
                            <div className="calc-select-box">
                                <div className="calc-select-box__img"></div>
                                <div className="calc-select-box__main">
                                    <span>Title</span>
                                    <select id="">
                                        <option value="">--choose an option--</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                </div>
                            </div>
                            <div className="calc-select-box">
                                <div className="calc-select-box__img"></div>
                                <div className="calc-select-box__main">
                                    <span>Title</span>
                                    <select id="">
                                        <option value="">--choose an option--</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                </div>
                            </div>
                            <div className="calc-select-box">
                                <div className="calc-select-box__img"></div>
                                <div className="calc-select-box__main">
                                    <span>Title</span>
                                    <select id="">
                                        <option value="">--choose an option--</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                </div>
                            </div>

                            <div className="calc-select-boxLast" style={{ gridRow: "span 2" }}>
                                <div className="calc-select-boxLast-card">A</div>
                                <div className="calc-select-boxLast-card">B</div>
                                <div className="calc-select-boxLast-card">C</div>
                            </div>
                            <button type="submit" className="button-animated">
                                <span>Calculate</span>
                            </button>
                        </form>
                    </section>
                </article>
            </main>
            <Footer />
        </>
    );
};

export default CalculatorBottleneck;
