import React from 'react';

import SearchButton from '../Buttons/search-button';
import SavedButton from '../Buttons/saved-button';
import MenuButton from '../Buttons/menu-button';

import MobileMenu from './mobile-menu';

export function handleToggleHamburgerMenu(open) {
    let menu = document.getElementById('mobile-header-menu');
    menu.style['transform'] = open ? 'translate(0)' : 'translate(120%)';

    let background = document.getElementById('mobile-header-background');
    background.style['transform'] = open ? 'scale(1)' : 'scale(0)';
    background.style['opacity'] = open ? '1' : '0';
}

const MobileHeader = () => {
    return (
        <div className="mobile-header">
            <ul className="header-bar">
                <li className="header-bar__item header-logo">
                    <a href="/" className="header-bar__item-link">
                        <span>PC_PARTS</span>
                    </a>
                </li>

                <li className="header-bar__item header-bar__item-icon header-search">
                    <SearchButton />
                </li>
                <li className="header-bar__item header-bar__item-icon">
                    <SavedButton />
                </li>

                <li className="header-bar__item header-bar__item-icon header-menu">
                    <MobileMenu />
                    <MenuButton />
                </li>
            </ul>
        </div>
    );
};

export default MobileHeader;
