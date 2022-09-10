import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="header-container">
                <ul className="header-bar">
                    <li className="header-bar__item">
                        <Link to="/">
                            <span>RKCHIR</span>
                        </Link>
                    </li>
                    <li className="header-bar__item">
                        <Link to="/">
                            <span>Home</span>
                        </Link>
                    </li>
                    <li className="header-bar__item">
                        <Link to="/">
                            <span>Catalog</span>
                        </Link>
                    </li>
                    <li className="header-bar__item search">
                        <button type="button" className="button-icon">
                            <span>S</span>
                        </button>
                    </li>
                    <li className="header-bar__item">
                        <button type="button" className="button-icon">
                            <span>C</span>
                        </button>
                    </li>
                    <li className="header-bar__item">
                        <button type="button" className="button-default">
                            <span>Sign up</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
