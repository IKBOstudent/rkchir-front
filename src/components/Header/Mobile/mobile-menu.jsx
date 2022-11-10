import React from "react";
import CloseMenuButton from "../Buttons/close-menu-button";

import "./mobile-header.scss";

import { handleToggleHamburgerMenu } from "../desktop-header";

const MobileMenu = () => {
    return (
        <>
            <div
                className="mobile-header-background"
                id="mobile-header-background"
                onClick={() => handleToggleHamburgerMenu(false)}
            ></div>
            <div className="mobile-header-menu" id="mobile-header-menu">
                <div className="mobile-header-menu-top">
                    <CloseMenuButton />
                </div>
                <ul>
                    <li className="mobile-header__item">
                        <a href="/register">
                            <button type="button" className="button-animated">
                                <span>Sign up</span>
                            </button>
                        </a>
                    </li>
                    <li className="mobile-header__item">
                        <a href="/" className="mobile-header__item-link">
                            <span>Home</span>
                        </a>
                    </li>
                    <li className="mobile-header__item">
                        <a href="/catalog" className="mobile-header__item-link">
                            <span>Catalog</span>
                        </a>
                    </li>
                    <li className="mobile-header__item">
                        <a href="/configure" className="mobile-header__item-link">
                            <span>Configure</span>
                        </a>
                    </li>
                    <li className="mobile-header__item">
                        <a href="/calculator-bottleneck">
                            <span>Bottleneck Calculator</span>
                            <small>Check your CPU and GPU compatibility</small>
                        </a>
                    </li>
                    <li className="mobile-header__item">
                        <a href="/calculator-psu">
                            <span>PSU Calculator</span>
                            <small>Calculate Power Supply Unit wattage for your PC build</small>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default MobileMenu;
