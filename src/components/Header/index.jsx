import React from "react";

import "./header.scss";
import DesktopHeader from "./desktop-header";
import Notification from "./Notification";

import pic from "@assets/poster3.jpg";

const Header = () => {
    React.useEffect(() => {
        const script = document.createElement("script");
        // script.defer = true;
        script.src = "./notifications_script.js";

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            <header id="header">
                <img src={pic} style={{ display: "none" }} />
                <div className="header-container">
                    <DesktopHeader />
                </div>
            </header>
            <Notification />
        </>
    );
};

export default Header;
