import React from 'react';

const SearchButton = () => {
    return (
        <button type="button" className="button-icon">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                role="img"
                aria-hidden="true"
                strokeWidth="1.5">
                <title>Search Icon</title>

                <circle
                    cx="9.813"
                    cy="9.812"
                    r="9.063"
                    transform="rotate(-23.025 9.813 9.812)"></circle>
                <path d="M16.221 16.22l7.029 7.03"></path>
            </svg>
        </button>
    );
};

export default SearchButton;
