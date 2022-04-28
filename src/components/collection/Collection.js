import React from "react";
import images from "../../data/collectionImage";
import "./collection.scss";
const Collection = () => {
  const renderImage = images.map((image) => {
    const { id, img, title } = image;
    return (
      <div key={id} className="img-collection">
        <img src={img} alt={title} />
        <div className="test">
          <p className="text-center">{title}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="container-fluid collection">
      <h3 className="text-center">Latest collections</h3>
      <div className="image-grid">{renderImage}</div>
      <div className="mt-3  text-center hero">
        <button className="btn-sec text-black mt-4 mb-4">
          See all collections
        </button>
      </div>
    </div>
  );
};

export default Collection;
