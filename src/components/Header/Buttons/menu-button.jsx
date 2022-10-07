import React from 'react';

const MenuButton = () => {
    function handleToggleHamburgerMenu() {
        document.getElementById('mobile-header-menu').style.transform = 'translateX(0)';
    }

    return (
        <button type="button" className="button-icon" onClick={handleToggleHamburgerMenu}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                role="img"
                aria-hidden="true"
                strokeWidth="1.6"
                width="24">
                <title>Menu Icon</title>

                <path d="M2.25 18.003h19.5m-19.5-6h19.5m-19.5-6h19.5"></path>
            </svg>
        </button>
    );
};

export default MenuButton;
