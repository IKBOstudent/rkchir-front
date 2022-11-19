import React from 'react';

import './cart.scss';

import Header from '@components/Header';
import Footer from '@components/Footer';

import img_pc2 from '@assets/intel_i5.png';

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
                            <img src={img_pc2} alt="item" />
                            <div className="cart-items__item-content">
                                <div className="cart_left">
                                    <div>
                                        <h3>Name 1</h3>
                                        <small>Pay 0% APR for 12 months:</small>
                                    </div>

                                    <div>
                                        <h4>$201.99</h4>
                                        <button className="button-clear">Remove</button>
                                    </div>
                                </div>

                                <div className="cart_right">
                                    <button className="button-shop">-</button>
                                    <h4>0</h4>
                                    <button className="button-shop">+</button>
                                </div>
                            </div>
                        </li>
                    </ul>

                    <section className="cart-total">
                        <div>
                            <span>Subtotal</span>
                            <span>$1,499.00</span>
                        </div>

                        <div>
                            <span>Shipping</span>
                            <span>FREE</span>
                        </div>

                        <div>
                            <h2>Total</h2>
                            <h2>$1,499.00</h2>
                        </div>

                        <div>
                            <button className="button-animated">
                                <span>CHECKOUT</span>
                            </button>
                        </div>
                    </section>
                </article>
            </main>
            <Footer />
        </>
    );
};

export default Cart;
