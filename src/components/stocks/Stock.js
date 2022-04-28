import React, { useState } from "react";
import "./stock.scss";
import data from "../../data/standardData";
import royalData from "../../data/royalData";
import Standard from "../standard/Standard";
import Royal from "../royal/Royal";

const Stock = () => {
  const [standard, setIsStandard] = useState(true);
  return (
    <>
      <div className="buy-stock mt-3">
        <h6 className="mb-3">Buy this stock image now...</h6>
        <div className="buttons">
          <button onClick={() => setIsStandard(true)}>Standard licenses</button>
          <button onClick={() => setIsStandard(false)}>
            Royality free licenses
          </button>
        </div>
        {standard ? (
          <div className="standard mt-3">
            {data.map((item) => (
              <Standard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="standard mt-5">
            {royalData.map((item) => (
              <Royal key={item.id} item={item} />
            ))}
          </div>
        )}
        <div className="buttons-group mt-4">
          <button className="btn-sec">Buy now</button>
          <br />
          <button className="btn-sec">Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default Stock;
