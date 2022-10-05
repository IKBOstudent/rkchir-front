import React from "react";

import "./navigation.scss";

const Navigation = () => {
    return (
        <ol className="configure-nav-list">
            <li className="current">
                <a href="#">
                    <sup>01</sup>
                    <strong>System</strong>
                </a>
            </li>
            <li>
                <a href="#">
                    <sup>02</sup>
                    <strong>Peripherals</strong>
                </a>
            </li>
            <li>
                <a href="#">
                    <sup>03</sup>
                    <strong>Customization</strong>
                </a>
            </li>

            <li>
                <a href="#">
                    <sup>04</sup>
                    <strong>Other</strong>
                </a>
            </li>
        </ol>
    );
};

export default Navigation;
