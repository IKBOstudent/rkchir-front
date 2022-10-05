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
                    <input type="text" />
                    <input type="email" />
                    <input type="password" />
                    <input type="checkbox" />
                    <button type="submit" className="button-default">
                        Sign Up
                    </button>
                </form>
            </section>
            <section>
                <span>Made by IKBOstudent © 2022 </span>
            </section>
        </main>
    );
};

export default SignUp;
