import React from 'react';

import './navigation.scss';

const Navigation = () => {
    return (
        <nav>
            <div className="nav-container">
                <ol className="nav-list">
                    <li className="nav-list-link current">
                        <a href="#">
                            <sup>01</sup>
                            <strong>System</strong>
                        </a>
                    </li>
                    <li className="nav-list-link">
                        <a href="#">
                            <sup>02</sup>
                            <strong>Peripherals</strong>
                        </a>
                    </li>
                    <li className="nav-list-link">
                        <a href="#">
                            <sup>03</sup>
                            <strong>Customization</strong>
                        </a>
                    </li>

                    <li className="nav-list-link">
                        <a href="#">
                            <sup>04</sup>
                            <strong>Other</strong>
                        </a>
                    </li>
                </ol>
            </div>
        </nav>
    );
};

export default Navigation;
