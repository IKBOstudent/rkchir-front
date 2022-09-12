import React from "react";
import { Link } from "react-router-dom";

import "./header.scss";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header-container">
        <ul className="header-bar">
          <li className="header-bar__item">
            <Link to="/">
              <span>RKCHIR</span>
            </Link>
          </li>
          <li className="header-bar__item">
            <Link to="/">
              <span>Home</span>
            </Link>
          </li>
          <li className="header-bar__item">
            <Link to="/">
              <span>Catalog</span>
            </Link>
          </li>
          <li className="header-bar__item search">
            <button type="button" className="button-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                role="img"
                aria-hidden="true"
                strokeWidth="1.5"
              >
                {/* <title>Search Icon</title> */}
                <circle cx="9.813" cy="9.812" r="9.063" transform="rotate(-23.025 9.813 9.812)"></circle>
                <path d="M16.221 16.22l7.029 7.03"></path>
              </svg>
            </button>
          </li>
          <li className="header-bar__item">
            <button type="button" className="button-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                role="img"
                aria-hidden="true"
                strokeWidth="1.5"
              >
                {/* <title>Cart Icon</title> */}
                <rect x="0.75" y="6" width="22.5" height="16.5" rx="1.5" ry="1.5"></rect>
                <path d="M 15.342 2.525 A 1.5 1.5 0 0 0 13.919 1.5 h -3.838 a 1.5 1.5 0 0 0 -1.423 1.025 L 7.5 6 h 9 z"></path>
              </svg>
            </button>
          </li>
          <li className="header-bar__item">
            <button type="button" className="button-default">
              <span>Sign up</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
