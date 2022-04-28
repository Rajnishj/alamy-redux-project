import React, { Fragment } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useSelector } from "react-redux";
import SingleImage from "../singleImage/SingleImage";

import "./imagecollection.scss";

const ImageCollection = () => {
  const image = useSelector((state) => state.image.images);
  return (
    <Fragment>
      <div className="bg-change">
        <Header />
      </div>
      <div className="image-section">
        {image.map((image) => (
          <SingleImage key={image.id} image={image} />
        ))}
      </div>
      <Footer />
    </Fragment>
  );
};

export default ImageCollection;
