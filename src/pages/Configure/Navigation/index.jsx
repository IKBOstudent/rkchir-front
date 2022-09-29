import React from 'react';

import './navigation.scss';

const Navigation = () => {
    return (
        <nav>
            <div className="configure-nav-container">
                <section className="configure-nav-first">
                    <ol className="configure-nav-first-list">
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
                </section>

                <section className="configure-nav-second">
                    <ul className="configure-nav-second-list">
                        <li>
                            <a href="#">CPU</a>
                        </li>
                        <li>
                            <a href="#">Video Card</a>
                        </li>
                        <li>
                            <a href="#">Motherboard</a>
                        </li>
                        <li>
                            <a href="#">CPU Cooling</a>
                        </li>
                        <li>
                            <a href="#">RAM</a>
                        </li>
                        <li>
                            <a href="#">Storage</a>
                        </li>
                        <li>
                            <a href="#">PowerSupply</a>
                        </li>
                        <li>
                            <a href="#">Case</a>
                        </li>
                    </ul>
                </section>
            </div>
        </nav>
    );
};

export default Navigation;
