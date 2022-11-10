import React from 'react';

const SavedDropdown = () => {
    return (
        <div id="saved-dropdown" aria-hidden="false" className="header-bar__item-icon-menu">
            <div className="header-bar__item-icon-menu-content">
                <h3>Saved products (2)</h3>
                <ul>
                    <li>
                        <a href="#">
                            <span>Saved 1</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span>Saved 2</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SavedDropdown;
