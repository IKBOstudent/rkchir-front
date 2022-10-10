import React from "react";

import "./signup.scss";

const SignUp = () => {
    return (
        <main className="signup-container">
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

                    <div className="signup-form-checkbox">
                        <input id="signup-checkbox" type="checkbox" value="check" />
                        <label htmlFor="signup-checkbox">Remember me</label>
                    </div>

                    <button type="submit" className="button-default">
                        Sign Up
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
