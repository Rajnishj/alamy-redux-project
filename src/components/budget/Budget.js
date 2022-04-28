import React from "react";
import data from "../../data/budgetData";
import ListItem from "../ListItem/ListItem";
import "./budget.scss";

const Budget = () => {
  return (
    <div className="container-fluid">
      <div className="budget-sec-1">
        <h2>Stretch your budget </h2>
        <p>Get 30% more creative firepower with a content pack</p>
        <button className="btn-sec">Buy now</button>
      </div>
      <div className="budget-sec-2">
        <div className="item-container">
          {data.map((item) => (
            <ListItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Budget;
