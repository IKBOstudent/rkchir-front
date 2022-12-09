import React from 'react';

import './header.scss';
import DesktopHeader from './desktop-header';
import Notification from './Notification';

const Header = () => {
    return (
        <>
            <header id="header">
                <div className="header-container">
                    <DesktopHeader />
                </div>
            </header>
            <Notification />
        </>
    );
};

export default Header;
