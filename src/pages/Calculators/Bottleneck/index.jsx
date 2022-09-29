import React from 'react';

import './calculator-bottleneck.scss';

import Header from '@components/Header';
import Footer from '@components/Footer';

const CalculatorBottleneck = () => {
    return (
        <>
            <Header />
            <main>
                <article className="calc-bottleneck-container">
                    <section>Bottlenck</section>
                </article>
            </main>
            <Footer />
        </>
    );
};

export default CalculatorBottleneck;
