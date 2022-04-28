import React from "react";
import "./mainFooter.scss";

const MainFooter = ({ header, text, para }) => {
  return (
    <div className="main-footer">
      <div className="container">
        <h2>{header}</h2>
        <div className="footer-inner-sec">
          <span>{para}</span>
          <button className="btn-sec">{text}</button>
          <span>
            <i className="bi bi-arrow-left-circle"></i>
            <i className="bi bi-pause-fill"></i>
            <i className="bi bi-arrow-right-circle"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
