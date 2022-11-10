import React from 'react';

const CalculatorsButton = () => {
    function handleToggleCalcMenu() {
        document.getElementById('calculators-menu').style.display = 'block';
    }

    const clickedOutside = (event) => {
        if (!event.target.closest('.header-bar__item-calc')) {
            let calc_menu = document.getElementById('calculators-menu');
            if (calc_menu.style.display === 'block') {
                calc_menu.style.display = 'none';
            }
        }
    };

    React.useEffect(() => {
        document.addEventListener('click', clickedOutside);

        return () => {
            document.removeEventListener('click', clickedOutside);
        };
    }, []);

    return (
        <button type="button" className="header-bar__item-link" onClick={handleToggleCalcMenu}>
            <span>Calculators</span>
            <svg
                viewBox="0 0 8 8"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-hidden="true"
                aria-label="dropdown"
                width="12"
                height="12">
                <title>Arrow Icon</title>

                <path d="M7.066 1.5L4 6.099.934 1.5h6.132z"></path>
            </svg>
        </button>
    );
};

export default CalculatorsButton;
