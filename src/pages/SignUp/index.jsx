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
                    <div className="signup-form-input">
                        <input
                            id="signup-text"
                            type="text"
                            className="form-name"
                            placeholder="Ivan"
                            required
                        />
                        <label htmlFor="#signup-text">Name</label>
                    </div>

                    <div className="signup-form-input">
                        <input
                            id="signup-email"
                            type="email"
                            className="form-email"
                            placeholder="ivan@gmail.com"
                            required
                        />
                        <label htmlFor="#signup-text">Email</label>
                    </div>

                    <div className="signup-form-input">
                        <input
                            id="signup-password"
                            type="password"
                            className="form-password"
                            required
                        />
                        <label htmlFor="#signup-text">Password</label>
                    </div>

                    <label htmlFor="#signup-text">
                        Remember me
                        <input
                            id="signup-checkbox"
                            type="checkbox"
                            className="form-checkbox"
                            value="check"
                        />
                    </label>

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
