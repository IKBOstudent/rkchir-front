import React from "react";

import "./signup.scss";

const ArrowIcon = () => {
    return (
        <svg width="20" height="15" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="2">
            <path d="M14 18L8 12L14 6" />
        </svg>
    );
};

const SignUp = () => {
    return (
        <main className="signup-container">
            <section className="signup-return">
                <a href="/">
                    <ArrowIcon />
                    Back to Home
                </a>
            </section>

            <section className="signup-title">
                <h1>Get started for free</h1>
            </section>
            <section>
                <form className="signup-form">
                    <div className="signup-form-input">
                        <input id="signup-text" type="text" className="form-name" placeholder="Ivan" required />
                        <label htmlFor="signup-text">Name</label>
                    </div>

                    <div className="signup-form-input">
                        <input
                            id="signup-email"
                            type="email"
                            className="form-email"
                            placeholder="ivan@gmail.com"
                            required
                        />
                        <label htmlFor="signup-email">Email</label>
                    </div>

                    <div className="signup-form-input">
                        <input
                            id="signup-password"
                            type="password"
                            className="form-password"
                            placeholder="********"
                            required
                        />
                        <label htmlFor="signup-password">Password</label>
                    </div>
                    <div className="signup-form-forgot">
                        <a href="#">Forgot password?</a>
                    </div>

                    <div className="signup-form-checkbox">
                        <input id="signup-checkbox" type="checkbox" value="check" />
                        <label htmlFor="signup-checkbox">Remember me</label>
                    </div>

                    <button id="signup-submit" type="submit" className="button-animated">
                        <span>Sign Up</span>
                    </button>
                </form>
            </section>
            <section className="signup-bottom-agreements">
                <span>
                    By signing up, you agree to our <u>Terms of Use</u> and <u> Privacy Policy</u>.
                </span>
            </section>

            <section className="signup-link-login">
                Already have an account? <a href="#">Log in</a>
            </section>
        </main>
    );
};

export default SignUp;
