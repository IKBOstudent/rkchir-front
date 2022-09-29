import React from 'react';

import './calculator-psu.scss';

import Header from '@components/Header';
import Footer from '@components/Footer';

const CalculatorPSU = () => {
    return (
        <>
            <Header />
            <main>
                <article className="calc-psu-container">
                    <section>PSU</section>
                </article>
            </main>
            <Footer />
        </>
    );
};

export default CalculatorPSU;
