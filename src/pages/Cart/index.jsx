import React from 'react';

import './cart.scss';

import Header from '@components/Header';
import Footer from '@components/Footer';

const Cart = () => {
    return (
        <>
            <Header />
            <main>
                <article className="cart-container">Your cart</article>
            </main>
            <Footer />
        </>
    );
};

export default Cart;
