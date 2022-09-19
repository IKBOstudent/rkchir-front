import React from "react";

import "./footer.scss";

const Footer = () => {
    return (
        <footer>
            <article className="footer-container">
                <section className="footer-mainSection">
                    <div className="footer-mainSection-left">
                        <h3>FOOTER CONTENT LEFT</h3>
                        <h4>
                            <u>SOCIAL</u>
                        </h4>

                        <ul>
                            <li>
                                <abbr title="Common Gateway Interface, общий шлюзовый интерфейс">CGI</abbr>
                            </li>
                            <li>Second</li>
                            <li>Third</li>
                        </ul>
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
                    <div className="footer-groundSection-made">
                        <span>Made by IKBOstudent © 2022 </span>
                    </div>
                </section>
            </article>
        </footer>
    );
};

export default Footer;
