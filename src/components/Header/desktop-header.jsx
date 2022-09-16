import React from 'react';
import { Link } from 'react-router-dom';
import SavedButton from './Items/saved-button';
import SearchButton from './Items/search-button';

const DesktopHeader = () => {
    return (
        <div className="desktop-header">
            <ul className="header-bar">
                <li className="header-bar__item logo">
                    <Link to="/">
                        <span>PC_PARTS</span>
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

                <li className="header-bar__item">
                    <Link to="/">
                        <span>Configure</span>
                    </Link>
                </li>

                <li className="header-bar__item search">
                    <SearchButton />
                </li>
                <li className="header-bar__item">
                    <SavedButton />
                </li>

                <li className="header-bar__item">
                    <button type="button" className="button-default">
                        <span>Sign up</span>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default DesktopHeader;
