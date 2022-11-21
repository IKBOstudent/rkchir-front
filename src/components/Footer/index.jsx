import React from "react";

import "./footer.scss";

const SocialIcon = ({ icon }) => {
    const icons = [
        "M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.8-2.7-.2-5.2-1.5-6.8-3.5-.3.5-.4 1.1-.4 1.6 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.2-.6.2-.9.2-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z",

        "M6.1 16V8.5h-2V5.8h2V3.5C6.1 1.7 7.3 0 10 0c1.1 0 1.9.1 1.9.1l-.1 2.5h-1.7C9.1 2.6 9 3 9 3.8v2h2.9l-.1 2.7H8.9V16H6.1z",

        "M14 16H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h12c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2zM8 4.9c-1.2 0-2.3.7-2.8 1.8 0 .1-.1.1-.1.2V7c-.1.1-.1.2-.1.2v.7C5 9.6 6.4 11 8.1 11s3.1-1.4 3.1-3.1v-.7s0-.1-.1-.2v-.1c0-.1-.1-.1-.1-.2-.7-1.1-1.8-1.8-3-1.8zm6.2-2.3c0-.4-.4-.8-.8-.8h-1.6c-.4 0-.8.4-.8.8v1.6c0 .4.4.8.8.8h1.6c.4 0 .8-.4.8-.8V2.6zm0 4.1h-1.5c.1.4.2.8.2 1.3 0 2.7-2.2 4.9-4.9 4.9S3.1 10.7 3.1 8c0-.5.1-.9.2-1.3H1.8v6.7c0 .4.4.8.8.8h10.8c.4 0 .8-.4.8-.8V6.7z",
    ];

    return (
        <a className="footer-svg" href="#">
            <svg
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-hidden="true"
                aria-label="dropdown"
                fill="black"
            >
                <path d={icons[icon]}></path>
            </svg>
        </a>
    );
};

const Footer = () => {
    return (
        <footer>
            <article className="footer-container">
                <section className="footer-mainSection">
                    <div className="footer-mainSection-left">
                        <h3>FOOTER CONTENT LEFT</h3>
                        <div className="footer-mainSection-left-social">
                            <SocialIcon icon={0} />
                            <SocialIcon icon={1} />
                            <SocialIcon icon={2} />
                        </div>
                    </div>
                    <div className="footer-mainSection-right">
                        <h3>FOOTER CONTENT RIGHT</h3>
                        <div className="contacts">
                            <h4>CONTACTS</h4>
                            <ul>
                                <li>
                                    mail: <br />
                                    <a href="mailto:maxpon225@gmail.com">maxpon225@gmail.com</a>
                                </li>
                                <li>
                                    telephone: <br />
                                    <a href="tel:88005553535">88005553535</a>
                                </li>

                                <li>
                                    github: <br />
                                    <a href="https://github.com/IKBOstudent">IKBOstudent</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="footer-groundSection">
                    <div className="footer-groundSection-policy">
                        <ul>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#">Cookie policy</a>
                            </li>
                            <li>
                                <a href="#">Terms</a>
                            </li>
                        </ul>
                    </div>
                    <aside className="footer-groundSection-made">
                        <span>Made by IKBOstudent © 2022 </span>
                    </aside>
                </section>
            </article>
        </footer>
    );
};

export default Footer;
