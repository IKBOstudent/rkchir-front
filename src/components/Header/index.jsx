import React from "react";
import { Link } from "react-router-dom";

import "./header.scss";

const Header = () => {
  return (
    <div className="header-container">
      <ul className="header-bar">
        <li>
          <Link to="/" className="header-bar__item">
            <span>RKCHIR</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="header-bar__item">
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="header-bar__item">
            <span>Catalog</span>
          </Link>
        </li>
        <li>
          <button type="button" className="header-bar__item">
            <span>Search</span>
          </button>
        </li>
        <li>
          <button type="button" className="header-bar__item">
            <span>Cart</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
