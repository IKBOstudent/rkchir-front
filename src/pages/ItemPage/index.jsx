import React from 'react';

import './item-page.scss';

import Header from '@components/Header';
import Footer from '@components/Footer';

import img_pc1_front from '@assets/img_pc1.png';
import img_pc1_top from '@assets/img_pc1_top.png';
import img_pc1_side from '@assets/img_pc1_side.png';
import img_pc1_back from '@assets/img_pc1_back.png';

const ItemPage = () => {
    const images = [img_pc1_front, img_pc1_top, img_pc1_side, img_pc1_back];

    function handleClickImage(event, id) {
        const selected = images[id];
        const current = document.getElementById('selected-image');
        current.src = selected;
        const ul_children = event.target.parentElement.children;
        for (let li of ul_children) {
            li.classList.remove('current-image');
            if (li === event.target) {
                li.classList.add('current-image');
            }
        }
    }
    return (
        <>
            <Header />
            <main>
                <article className="item-container">
                    <div className="item-box">
                        <div className="item-img">
                            <div>
                                <img id="selected-image" src={images[0]} alt="item" />
                            </div>
                            <ul>
                                {images.map((item, id) => (
                                    <li
                                        className={id === 0 ? 'current-image' : ''}
                                        key={id}
                                        onClick={(event) => {
                                            handleClickImage(event, id);
                                        }}>
                                        <img src={item} alt="item" />
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <ul className="item-text">
                            <li>
                                <h2>PC item n1</h2>
                                <sub>Sub text</sub>
                            </li>

                            <li className="item-text-buy">
                                <h1>$ 1,299.00</h1>
                                <button className="button-animated">
                                    <span>ADD TO CART</span>
                                </button>
                                <h5>10 IN STOCK WITH 30 DAYS FREE RETURNS</h5>
                            </li>

                            <li>
                                <p>First</p>
                                <p>Second</p>
                                <p>Third</p>
                            </li>
                        </ul>
                    </div>
                </article>
            </main>
            <Footer />
        </>
    );
};

export default ItemPage;
