import React from 'react';

const CalculatorsDropdown = () => {
    return (
        <div aria-hidden="false" className="header-bar__item-calc-menu">
            <ul>
                <li>
                    <a href="/calculator-bottleneck">
                        <span>Bottleneck Calculator</span>
                        <small>Check your CPU and GPU compatibility</small>
                    </a>
                </li>
                <li>
                    <a href="/calculator-psu">
                        <span>PSU Calculator</span>
                        <small>Calculate Power Supply Unit wattage for your PC build</small>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default CalculatorsDropdown;
