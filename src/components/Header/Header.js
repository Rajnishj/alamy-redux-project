import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <>
      <div className="container inner">
        <div className="inner-sec">
          <h1>
            <Link to="/">alamy</Link>
          </h1>
          <span>
            267,345,543 stock photos, 360 &#176; images, vectors and videos
          </span>
        </div>
        <ul>
          <li>
            <a href="!#">
              <i className="bi bi-plus-circle"></i>Lightboxes
            </a>
          </li>
          <li>
            <a href="!#">
              <i className="bi bi-cart"></i>Cart
            </a>
          </li>
          <li>
            <a href="!#">
              <i className="bi bi-person"></i>Account
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
