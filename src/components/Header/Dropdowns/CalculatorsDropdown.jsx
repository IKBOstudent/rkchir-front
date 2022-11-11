import React from 'react';
import { Link } from 'react-router-dom';

const CalculatorsDropdown = () => {
    return (
        <div id="calculators-menu" aria-hidden="false" className="header-bar__item-calc-menu">
            <ul>
                <li>
                    <Link to="/calculator-bottleneck">
                        <span>Bottleneck Calculator</span>
                        <small>Check your CPU and GPU compatibility</small>
                    </Link>
                </li>
                <li>
                    <Link to="/calculator-psu">
                        <span>PSU Calculator</span>
                        <small>Calculate Power Supply Unit wattage for your PC build</small>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default CalculatorsDropdown;
