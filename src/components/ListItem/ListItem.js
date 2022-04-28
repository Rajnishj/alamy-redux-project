import React from "react";
import "./listitem.scss";

const ListItem = ({ item }) => {
  const { title, description, img, content } = item;
  return (
    <div className="card">
      <img className="" src={img} alt={title} />
      <div className="card-body">
        <h4 className="">{title}</h4>
        <p className="">{description}</p>
        <button className="btn-sec">{content}</button>
      </div>
    </div>
  );
};

export default ListItem;
