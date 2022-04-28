import React, { useState } from "react";
import "./standard.scss";

const Standard = ({ item }) => {
  const [visible, setVisible] = useState("");
  return (
    <div className="standard-sec">
      <div className="radio-field mt-2">
        <input
          type="radio"
          className="mx-2"
          name="isyes"
          value={item.description}
          onClick={(e) => setVisible(e.target.value)}
        />
        <span>{item.title}</span>
        <strong>£ {item.amount}</strong>
      </div>
      <p>{visible}</p>
    </div>
  );
};

export default Standard;
