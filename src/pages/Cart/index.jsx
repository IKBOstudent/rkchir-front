import React from "react";

import "./cart.scss";

import Header from "@components/Header";
import Footer from "@components/Footer";

import img_pc2 from "@assets/intel_i5.png";

const initialState = [
    { id: "0", value: "Name 1", count: 3 },
    { id: "1", value: "Name 2", count: 5 },
    { id: "2", value: "Name 3", count: 1 },
    { id: "3", value: "Name 4", count: 2 },
];

const Cart = () => {
    const [items, setItems] = React.useState([...initialState]);

    function remove_item(index) {
        setItems(items.filter(el => el.id !== index));
    }

    function handleClick(par, index) {
        setItems(
            items.filter(el => {
                if (el.id === index) {
                    par ? el.count++ : el.count--;
                }
                return true;
            })
        );
    }

    return (
        <>
            <Header />
            <main>
                <article className="cart-container">
                    <h1>Your cart</h1>

                    <ul className="cart-items">
                        {items.map(item => (
                            <li key={item.id} className="cart-items__item">
                                <img src={img_pc2} alt="item" />
                                <div className="cart-items__item-content">
                                    <div className="cart_left">
                                        <div>
                                            <h3>{item.value}</h3>
                                            <small>Pay 0% APR for 12 months:</small>
                                        </div>

                                        <div>
                                            <h4>$201.99</h4>
                                            <button className="button-clear" onClick={() => remove_item(item.id)}>
                                                Remove
                                            </button>
                                        </div>
                                    </div>

                                    <div className="cart_right">
                                        <button
                                            className={"button-shop" + (item.count === 1 ? " button-disabled" : "")}
                                            onClick={() => handleClick(false, item.id)}
                                        >
                                            -
                                        </button>
                                        <h4>{item.count}</h4>
                                        <button className="button-shop" onClick={() => handleClick(true, item.id)}>
                                            +
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
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
