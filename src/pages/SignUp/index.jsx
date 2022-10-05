import React from 'react';

import './signup.scss';

const SignUp = () => {
    return (
        <main className="signup-container">
            <section className="signup-title">
                <h1>Get started for free</h1>
            </section>
            <section>
                <form className="signup-form">
                    <input type="text" className="form-name" />
                    <input type="email" className="form-email" />
                    <input type="password" className="form-password" />
                    <input type="checkbox" className="form-checkbox" />
                    <button type="submit" className="button-default">
                        Sign Up
                    </button>
                </form>
            </section>
            <section>
                <span>By signing up, you agree to our Terms of Use and Privacy Policy.</span>
            </section>
        </main>
    );
};

export default SignUp;
