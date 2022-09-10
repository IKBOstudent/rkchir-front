import React from 'react';

import './navigation.scss';

const Navigation = () => {
    return (
        <div className="nav-container">
            <ol className="nav-list">
                <li className="nav-list-link active">
                    <a href="#first-products">
                        <sup>01</sup>
                        <strong>First</strong>
                    </a>
                </li>
                <li className="nav-list-link">
                    <a href="#second-products">
                        <sup>02</sup>
                        <strong>Second</strong>
                    </a>
                </li>
                <li className="nav-list-link">
                    <a href="#third-products">
                        <sup>03</sup>
                        <strong>Third</strong>
                    </a>
                </li>
            </ol>
        </div>
    );
};

export default Navigation;
