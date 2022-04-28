import React, { useState } from "react";
import { Link } from "react-router-dom";

const SingleImage = ({ image }) => {
  const [hovered, isHovered] = useState(false);
  return (
    <>
      <div className="image-collection">
        <Link to={`/image/${image.id}`}>
          <div className="image-sec">
            <img
              onMouseOver={() => isHovered(true)}
              onMouseLeave={() => isHovered(false)}
              src={image.urls.small}
              alt={image.description}
            />
          </div>
        </Link>

        {hovered && (
          <div className="image-detail">
            <div className="detail-sec">
              <p>ID: {image.id}</p>
              <div>
                <i className="bi bi-circle"></i>
                <i className="bi bi-cart"></i>
                <i className="bi bi-collection"></i>
                <button className="btn-sec">Download</button>
              </div>
            </div>
            <span>{image.updated_at}</span>
          </div>
        )}
      </div>
    </>
  );
};

export default SingleImage;
