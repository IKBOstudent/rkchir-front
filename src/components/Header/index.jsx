import React from "react";

import "./header.scss";
import DesktopHeader from "./desktop-header";

const Header = () => {
    function handleClickHeader(event) {
        // if (event.target.closest("A")) {
        //     console.log("clicked a");
        //     if (!window.confirm("Are you sure you want to leave this page?")) event.preventDefault();
        // }
    }

    return (
        <header id="header" onClick={handleClickHeader}>
            <div className="header-container">
                <DesktopHeader />
            </div>
        </header>
    );
};

export default Header;
