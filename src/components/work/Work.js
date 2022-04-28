import React from "react";
import data from "../../data/alamyData";
import ListItem from "../ListItem/ListItem";
import "../budget/budget.scss";
import images from "../../data/CompanyLogo";

const Work = () => {
  return (
    <div className="container-fluid">
      <div className="budget-sec-1">
        <h2>Why work with Alamy? </h2>
        <p>
          Alamy is a British company with a global team of content experts.Get
          unrivalled customer support from creative people.{" "}
        </p>
      </div>
      <div className="budget-sec-2">
        <div className="item-container">
          {data.map((item) => (
            <ListItem key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="company-partner">
        <h2>Who we work with</h2>
        <div className="container image-grid">
          {images.map((item) => (
            <img key={item.id} src={item.img} alt={item.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
