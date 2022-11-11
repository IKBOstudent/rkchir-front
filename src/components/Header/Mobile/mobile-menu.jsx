import React from 'react';
import CloseMenuButton from '../Buttons/close-menu-button';

import './mobile-header.scss';

import { handleToggleHamburgerMenu } from '../desktop-header';
import { Link } from 'react-router-dom';

const MobileMenu = () => {
    return (
        <>
            <div
                className="mobile-header-background"
                id="mobile-header-background"
                onClick={() => handleToggleHamburgerMenu(false)}></div>
            <div className="mobile-header-menu" id="mobile-header-menu">
                <div className="mobile-header-menu-top">
                    <CloseMenuButton />
                </div>
                <ul>
                    <li className="mobile-header__item">
                        <Link to="/register">
                            <button type="button" className="button-animated">
                                <span>Sign up</span>
                            </button>
                        </Link>
                    </li>
                    <li className="mobile-header__item">
                        <Link to="/" className="mobile-header__item-link">
                            <span>Home</span>
                        </Link>
                    </li>
                    <li className="mobile-header__item">
                        <Link to="/catalog" className="mobile-header__item-link">
                            <span>Catalog</span>
                        </Link>
                    </li>
                    <li className="mobile-header__item">
                        <Link to="/configure" className="mobile-header__item-link">
                            <span>Configure</span>
                        </Link>
                    </li>
                    <li className="mobile-header__item">
                        <Link to="/calculator-bottleneck">
                            <span>Bottleneck Calculator</span>
                            <small>Check your CPU and GPU compatibility</small>
                        </Link>
                    </li>
                    <li className="mobile-header__item">
                        <Link to="/calculator-psu">
                            <span>PSU Calculator</span>
                            <small>Calculate Power Supply Unit wattage for your PC build</small>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default MobileMenu;
