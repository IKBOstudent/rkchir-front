import React from "react";

import "./cart.scss";

import Header from "@components/Header";
import Footer from "@components/Footer";

const Cart = () => {
    React.useEffect(() => {
        const script = document.createElement("script");
        script.defer = true;
        script.src = "./cart_script.js";

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
                                <button className="button-default">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 23 24"
                                        fill="none"
                                        role="img"
                                        aria-hidden="true"
                                        strokeWidth="2"
                                        width="24"
                                    >
                                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                    </svg>
                                </button>
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
