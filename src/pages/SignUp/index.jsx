import React from "react";
import { Link } from "react-router-dom";

import "./signup.scss";

const ArrowIcon = () => {
    return (
        <svg width="20" height="15" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="2">
            <path d="M14 18L8 12L14 6" />
        </svg>
    );
};

const SignUp = () => {
    function handleSubmit(event) {
        event.preventDefault();

        const nameInput = document.getElementById("signup-text");
        const emailInput = document.getElementById("signup-email");
        const passwordInput = document.getElementById("signup-password");
        const rememberInput = document.getElementById("signup-checkbox");
        const submitBtn = document.getElementById("signup-submit");

        console.log("submit");
        const payload = {
            name: nameInput.value.trim(),
            email: emailInput.value,
            password: passwordInput.value,
            remember: rememberInput.checked,
        };

        const textDiv = nameInput.parentElement;
        const emailDiv = emailInput.parentElement;
        const passwordDiv = passwordInput.parentElement;

        let good = true;
        if (payload.name.length < 4) {
            textDiv.className = "signup-form-input2";
            textDiv.lastChild.textContent = "Too short name!";
            good = false;
        } else {
            textDiv.className = "signup-form-input";
            textDiv.lastChild.textContent = "Name";
        }

        if (!payload.email.match(/\w+@\w+\.\w+/)) {
            emailDiv.className = "signup-form-input2";
            emailDiv.lastChild.textContent = "Invalid email!";
            good = false;
        } else {
            emailDiv.className = "signup-form-input";
            emailDiv.lastChild.textContent = "Email";
        }

        if (payload.password.length < 6) {
            passwordDiv.className = "signup-form-input2";
            passwordDiv.lastChild.textContent = "Too short password!";
            good = false;
        } else {
            passwordDiv.className = "signup-form-input";
            passwordDiv.lastChild.textContent = "Password";
        }

        if (good) {
            console.log(payload);
            submitBtn.style.backgroundColor = "#c4c4c4";
            submitBtn.style.pointerEvents = "none";
        }
    }

    return (
        <main className="signup-container">
            <section className="signup-return">
                <Link to="/">
                    <ArrowIcon />
                    Back to Home
                </Link>
            </section>

            <section className="signup-title">
                <h1>Get started for free</h1>
            </section>
            <section>
                <form className="signup-form" noValidate onSubmit={handleSubmit}>
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
                Already have an account? <Link to="/login">Log in</Link>
            </section>
        </main>
    );
};

export default SignUp;
