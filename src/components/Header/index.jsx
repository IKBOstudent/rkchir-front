import React from "react";

import "./header.scss";
import MobileHeader from "./mobile-header";
import DesktopHeader from "./desktop-header";

const Header = () => {
    return (
        <header>
            <div className="header-container">
                <DesktopHeader />
                <MobileHeader />
            </div>
        </header>
    );
};

export default Header;
