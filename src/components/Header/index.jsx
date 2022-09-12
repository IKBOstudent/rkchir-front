import React from 'react';

import './header.scss';
import MobileHeader from './mobile-header';
import DesktopHeader from './desktop-header';

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="header-container">
                <DesktopHeader />
                <MobileHeader />
            </div>
        </div>
    );
};

export default Header;
