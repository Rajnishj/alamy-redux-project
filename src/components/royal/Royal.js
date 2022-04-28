import React, { useState } from "react";
import "./royal.scss";

const Royal = ({ item }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="standard-sec">
      <div className="radio-field mt-2">
        <input
          type="radio"
          className="mx-2"
          name="isyes"
          value="1"
          onClick={() => setVisible(true)}
        />
        <span>{item.title}</span>
        <strong>£ {item.amount}</strong>
      </div>
      {visible ? (
        <>
          <p>{item.description}</p>
          <div className="check-box">
            <input type="checkbox" className="mx-2" name="isyes" value="1" />
            <span>{item.text}</span>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Royal;
