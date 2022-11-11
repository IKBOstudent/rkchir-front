import React from 'react';

const SavedButton = () => {
    function handleToggleSaved() {
        document.getElementById('saved-dropdown').style.display = 'block';
    }

    const clickedOutside = (event) => {
        if (event.target.id !== 'button-saved') {
            let saved = document.getElementById('saved-dropdown');
            if (saved.style.display === 'block') {
                saved.style.display = 'none';
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
        <button id="button-saved" type="button" className="button-icon" onClick={handleToggleSaved}>
            <svg
                style={{ pointerEvents: 'none' }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                role="img"
                aria-hidden="true"
                strokeWidth="1.5"
                width="24">
                <title>Saved Icon</title>

                <path d="M7 4V2.31c0-.347.134-.68.373-.926.238-.246.562-.384.9-.384h11.454c.338 0 .662.138.9.384.239.246.373.579.373.926V20"></path>
                <path d="M16.99 22.879l-5.242-3.794a1.277 1.277 0 00-1.496 0L5.01 22.88A.637.637 0 014 22.368V5.267A1.272 1.272 0 015.273 4h11.454A1.272 1.272 0 0118 5.267v17.101a.632.632 0 01-.687.63.637.637 0 01-.323-.12v0z"></path>
            </svg>
        </button>
    );
};

export default SavedButton;
