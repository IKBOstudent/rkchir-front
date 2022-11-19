import React from 'react';

import account_img from '@assets/account.png';

const AccountButton = () => {
    function handleToggleAccount() {
        document.getElementById('account-dropdown').style.display = 'block';
    }

    const clickedOutside = (event) => {
        if (event.target.id !== 'button-account') {
            let account = document.getElementById('account-dropdown');
            if (account.style.display === 'block') {
                account.style.display = 'none';
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
        <button id="button-account" type="button" onClick={handleToggleAccount}>
            <img src={account_img} alt="account" />
            <span>4</span>
        </button>
    );
};

export default AccountButton;
