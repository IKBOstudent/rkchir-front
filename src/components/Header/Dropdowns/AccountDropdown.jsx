import React from 'react';
import { Link } from 'react-router-dom';

const AccountDropdown = () => {
    return (
        <div id="account-dropdown" aria-hidden="false" className="header-bar__item-icon-menu">
            <div className="header-bar__item-icon-menu-content">
                <ul>
                    <li>
                        <a href="#">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                role="img"
                                aria-hidden="true">
                                <title>Person Icon</title>
                                <circle cx="12" cy="6" r="5.25"></circle>
                                <path d="M2.25 23.25a9.75 9.75 0 0119.5 0"></path>
                            </svg>
                            <span>Profile</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                role="img"
                                aria-hidden="true">
                                <title>Support Icon</title>
                                <path d="M9 9a3 3 0 114 2.829 1.5 1.5 0 00-1 1.415v1.006m0 3a.375.375 0 10.375.375.375.375 0 00-.375-.375h0"></path>
                                <circle cx="12" cy="12" r="11.25"></circle>
                            </svg>
                            <span>Help Center</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" id="notification-button">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                role="img"
                                aria-hidden="true">
                                <title>Notifications Icon</title>
                                <path d="M10 21.75a2.087 2.087 0 004.005 0M12 3V.75M12 3a7.5 7.5 0 017.5 7.5c0 7.046 1.5 8.25 1.5 8.25H3s1.5-1.916 1.5-8.25A7.5 7.5 0 0112 3z"></path>
                            </svg>
                            <span id="notification-count">Notifications (0)</span>
                        </a>
                    </li>
                    <li style={{ borderTop: '1px solid', paddingTop: 10 }}>
                        <Link to="/cart">
                            <button className="button-shop">
                                <span>
                                    Cart <small>(4)</small>
                                </span>
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AccountDropdown;
