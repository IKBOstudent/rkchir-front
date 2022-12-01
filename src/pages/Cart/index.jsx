import React from "react";

import "./cart.scss";

import Header from "@components/Header";
import Footer from "@components/Footer";

import img_intel_i5 from "@assets/intel_i5.png";
import img_intel_i7 from "@assets/intel_i7.png";
import img_intel_i9 from "@assets/intel_i9.png";

const initialState = [
    { id: "1", imgURL: img_intel_i5, value: "Intel Core i5-12600K", price: 359, count: 3 },
    { id: "2", imgURL: img_intel_i5, value: "Intel Core i5-11600K", price: 299, count: 2 },
    { id: "3", imgURL: img_intel_i7, value: "Intel Core i7-12700K", price: 429, count: 1 },
    { id: "4", imgURL: img_intel_i9, value: "Intel Core i9-12900K", price: 599, count: 1 },
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

    function handleDrop(event) {
        event.preventDefault();
        console.log(event);
        const element = document.querySelector(".dragging");
        console.log(element.dataset.id);
        remove_item(element.dataset.id);

        event.target.classList.remove("drop-target");
    }

    function handleDrag(event) {
        event.target.classList.add("dragging");
        // console.log(event);
    }

    return (
        <>
            <Header />
            <main>
                <article className="cart-container">
                    <div className="cart-top">
                        <h1>Your cart</h1>
                        <span
                            id="cart-trash"
                            onDragOver={e => e.preventDefault()}
                            onDrop={handleDrop}
                            onDragEnter={event => event.target.classList.add("drop-target")}
                            onDragLeave={event => event.target.classList.remove("drop-target")}
                        >
                            Trash
                        </span>
                    </div>

                    <ul className="cart-items">
                        {items.map((item, index) => (
                            <li
                                key={item.id}
                                data-id={item.id}
                                draggable
                                className="cart-items__item"
                                onDragStart={handleDrag}
                                onDragEnd={event => event.target.classList.remove("dragging")}
                            >
                                <img src={item.imgURL} alt="item" />
                                <div className="cart-items__item-content">
                                    <div className="cart_left">
                                        <div>
                                            <h3>{item.value}</h3>
                                            <small>Pay 0% APR for 12 months:</small>
                                        </div>

                                        <div>
                                            <h4>{"$" + item.price * item.count + ".00"}</h4>
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
                            <span>
                                {"$" + items.reduce((sum, item) => (sum += item.price * item.count), 0) + ".00"}
                            </span>
                        </div>

                        <div>
                            <span>Shipping</span>
                            <span>FREE</span>
                        </div>

                        <div>
                            <h2>Total</h2>
                            <h2>{"$" + items.reduce((sum, item) => (sum += item.price * item.count), 0) + ".00"}</h2>
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
