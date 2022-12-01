import React from "react";
import { Link } from "react-router-dom";

import "./login.scss";

const ArrowIcon = () => {
    return (
        <svg width="20" height="15" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="2">
            <path d="M14 18L8 12L14 6" />
        </svg>
    );
};

const LogIn = () => {
    function handleSubmit(event) {
        event.preventDefault();

        const emailInput = document.getElementById("login-email");
        const passwordInput = document.getElementById("login-password");
        const submitBtn = document.getElementById("login-submit");

        console.log("submit");
        const payload = {
            email: emailInput.value,
            password: passwordInput.value,
        };

        const emailDiv = emailInput.parentElement;
        const passwordDiv = passwordInput.parentElement;

        let good = true;

        if (!payload.email.match(/\w+@\w+\.\w+/)) {
            emailDiv.className = "login-form-input2";
            emailDiv.lastChild.textContent = "Invalid email!";
            good = false;
        } else {
            emailDiv.className = "login-form-input";
            emailDiv.lastChild.textContent = "Email";
        }

        if (payload.password.length < 6) {
            passwordDiv.className = "login-form-input2";
            passwordDiv.lastChild.textContent = "Too short password!";
            good = false;
        } else {
            passwordDiv.className = "login-form-input";
            passwordDiv.lastChild.textContent = "Password";
        }

        if (good) {
            console.log(payload);
            submitBtn.style.backgroundColor = "#c4c4c4";
            submitBtn.style.pointerEvents = "none";
        }
    }

    return (
        <main className="login-container">
            <section className="login-return">
                <Link to="/">
                    <ArrowIcon />
                    Back to Home
                </Link>
            </section>

            <section className="login-title">
                <h1>Log in</h1>
            </section>
            <section>
                <form className="login-form" noValidate onSubmit={handleSubmit}>
                    <div className="login-form-input">
                        <input
                            id="login-email"
                            type="email"
                            className="form-email"
                            placeholder="ivan@gmail.com"
                            required
                        />
                        <label htmlFor="login-email">Email</label>
                    </div>

                    <div className="login-form-input">
                        <input
                            id="login-password"
                            type="password"
                            className="form-password"
                            placeholder="********"
                            required
                        />
                        <label htmlFor="login-password">Password</label>
                    </div>
                    <div className="login-form-forgot">
                        <a href="#">Forgot password?</a>
                    </div>

                    <button id="login-submit" type="submit" className="button-animated">
                        <span>Log In</span>
                    </button>
                </form>
            </section>

            <section className="login-link-register">
                Don't have an account? <Link to="/register">Register</Link>
            </section>
        </main>
    );
};

export default LogIn;
