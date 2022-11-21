import React from "react";

import "./calculator-bottleneck.scss";

import Header from "@components/Header";
import Footer from "@components/Footer";

import img_intel_i5 from "@assets/intel_i5.png";
// import img_videocard from "@assets/videocard1.jpg";

const CalculatorBottleneck = () => {
    return (
        <>
            <Header />
            <main>
                <article className="calc-bottleneck-container">
                    <section>
                        <form>
                            <div className="calc-select-box">
                                <div className="calc-select-box__img">
                                    <img src={img_intel_i5} alt="" />
                                </div>
                                <div className="calc-select-box__main">
                                    <span>Processor</span>
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
                                <div className="calc-select-box__img">
                                    <img src={img_intel_i5} alt="" />
                                </div>
                                <div className="calc-select-box__main">
                                    <span>Graphic card</span>
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
                                <div className="calc-select-box__img">
                                    <img src={img_intel_i5} alt="" />
                                </div>
                                <div className="calc-select-box__main">
                                    <span>Screen resolution</span>
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
                                <div className="calc-select-boxLast-card">For Gaming</div>
                                <div className="calc-select-boxLast-card">
                                    Processor <br />
                                    Intense tasks
                                </div>
                                <div className="calc-select-boxLast-card">
                                    Video card <br />
                                    Intense tasks
                                </div>
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
