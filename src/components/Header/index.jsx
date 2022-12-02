import React from 'react';

import './header.scss';
import DesktopHeader from './desktop-header';
import Notification from './Notification';

const Header = () => {
    React.useEffect(() => {
        const script = document.createElement('script');
        // script.defer = true;
        script.src = './notifications_script.js';
        script.type = 'text/babel';
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    function handleClickHeader(event) {
        // if (event.target.closest('A')) {
        //     console.log('clicked a');
        //     if (!window.confirm('Are you sure you want to leave this page?'))
        //         event.preventDefault();
        // }
    }

    return (
        <>
            <header id="header" onClick={handleClickHeader}>
                <div className="header-container">
                    <DesktopHeader />
                </div>
            </header>
            <Notification />
        </>
    );
};

export default Header;
