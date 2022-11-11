import React from 'react';

import './header.scss';
import DesktopHeader from './desktop-header';

const Header = () => {
    return (
        <header id="header">
            <div className="header-container">
                <DesktopHeader />
            </div>
        </header>
    );
};

export default Header;
