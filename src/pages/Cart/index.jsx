import React from 'react';

import './cart.scss';

import Header from '@components/Header';
import Footer from '@components/Footer';

const Cart = () => {
    React.useEffect(() => {
        const script = document.createElement('script');
        script.defer = true;
        script.src = './cart_script.js';

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            <Header />
            <main>
                <article className="cart-container">
                    <h1>Your cart</h1>
                    <ul className="cart-items">
                        <li className="cart-items__item">
                            <h3>Name 1</h3>
                            <div>
                                <button className="button-shop">-</button>
                                <h4>0</h4>
                                <button className="button-shop">+</button>
                                <button className="button-default">Remove</button>
                            </div>
                        </li>
                    </ul>
                </article>
            </main>
            <Footer />
        </>
    );
};

export default Cart;
