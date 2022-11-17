import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h1>404</h1>
            <span>Not Found</span>
            <Link to="/">
                <h3>Return home</h3>
            </Link>
        </div>
    );
};

export default ErrorPage;
