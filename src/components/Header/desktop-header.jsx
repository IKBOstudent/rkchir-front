import React from "react";

import CalculatorsDropdown from "./Dropdowns/CalculatorsDropdown";
import AccountDropdown from "./Dropdowns/AccountDropdown";
import SearchDropdown from "./Dropdowns/SearchDropdown";

import AccountButton from "./Buttons/account-button";
import SearchButton from "./Buttons/search-button";
import CalculatorsButton from "./Buttons/calculators-button";
import MobileMenu from "./Mobile/mobile-menu";
import MenuButton from "./Buttons/menu-button";
import { Link } from "react-router-dom";

export function handleToggleHamburgerMenu(open) {
    let menu = document.getElementById("mobile-header-menu");
    menu.style["transform"] = open ? "translate(0)" : "translate(120%)";

    let background = document.getElementById("mobile-header-background");
    background.style["transform"] = open ? "scale(1)" : "scale(0)";
    background.style["opacity"] = open ? "1" : "0";
}

const DesktopHeader = () => {
    return (
        <div className="desktop-header">
            <ul className="header-bar">
                <li className="header-bar__item header-logo">
                    <Link to="/" className="header-bar__item-link">
                        <span>PC_PARTS</span>
                    </Link>
                </li>
                <li className="header-bar__item">
                    <Link to="/" className="header-bar__item-link">
                        <span>Home</span>
                    </Link>
                </li>
                <li className="header-bar__item">
                    <Link to="/catalog" className="header-bar__item-link">
                        <span>Catalog</span>
                    </Link>
                </li>

                <li className="header-bar__item">
                    <Link to="/configure" className="header-bar__item-link">
                        <span>Configure</span>
                    </Link>
                </li>

                <li className="header-bar__item header-bar__item-calc">
                    <CalculatorsButton />
                    <CalculatorsDropdown />
                </li>

                <li className="header-bar__item header-bar__item-icon header-search">
                    <SearchButton />
                    <button id="search-icon" type="button" className="button-icon">
                        <SearchDropdown />
                    </button>
                </li>

                <li className="header-bar__item header-bar__item-icon header-account">
                    <AccountButton />
                    <AccountDropdown />
                </li>

                <li className="header-bar__item header-bar__item-icon header-menu">
                    <MobileMenu />
                    <button type="button" className="button-icon" onClick={() => handleToggleHamburgerMenu(true)}>
                        <MenuButton />
                    </button>
                </li>

                <li className="header-bar__item header-register">
                    <Link to="/register">
                        <button type="button" className="button-animated">
                            <span>Sign up</span>
                        </button>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default DesktopHeader;
