import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { singleDetail, fetchAllData, getData } from "../../actions/ImageAction";
import searchName from "../../data/searchByNameData";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Stock from "../stocks/Stock";
import "./imageDetail.scss";

const ImageDetail = () => {
  const { id } = useParams();
  const [text, setText] = useState("");
  const [searchTerm, setSearchTerm] = useState(false);
  const singleData = useSelector((state) => state.image.selectedImage);
  const data = useSelector((state) => state.image.allImages);
  const allData = useSelector((state) => state.image.images);
  const dispatch = useDispatch();

  const handleSearchTerm = () => {
    dispatch(getData(text));
    setSearchTerm(true);
  };
  useEffect(() => {
    dispatch(fetchAllData());
    dispatch(singleDetail(id));
  }, [dispatch, id]);
  return (
    <>
      <div className="bg-change mb-5">
        <Header />
      </div>

      <div className="container mb-5 search-bar">
        <span>
          <i className="bi bi-image"></i>All Images{" "}
          <i className="bi bi-caret-down"></i>
        </span>
        <input
          type="text"
          value={text}
          placeholder="Start here"
          onChange={(e) => setText(e.target.value)}
        />
        <i className="bi bi-camera-fill"></i>
        <i onClick={(e) => handleSearchTerm(text)} className="bi bi-search"></i>
      </div>
      {Object.keys(singleData).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className="container img-collection">
          <div>
            <div className="row">
              <div className="img-container col-md-7 col-sm-12">
                <div className="img-inner-content">
                  <img src={singleData.urls.regular} alt="pomjh" />
                </div>
                <div className="p-2 inner-sec">
                  <div className="inner-sec1">
                    <i className="bi bi-image me-2"></i>
                    <span>
                      ImageID: <strong>{singleData.id}</strong>
                    </span>
                  </div>
                  <div className="inner-sec-2">
                    <p>
                      <i className="bi bi-download hero"></i>
                      <br />
                      <span>preview</span>
                    </p>
                    <p>
                      <i className="bi bi-plus-circle"></i>
                      <br />
                      <span>Save</span>
                    </p>
                    <p>
                      <i className="bi bi-share"></i>
                      <br />
                      <span>Share</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-sm-12">
                <div className="save">
                  <p>
                    <span className="text-danger">Save up to 30%</span>with our
                    image packs
                  </p>
                  <p>Pre page for multiple images and download demand.</p>
                  <button className="btn-sec">View Discount</button>
                </div>
                <Stock />
              </div>
            </div>
          </div>
          <div className="full-detail mt-4">
            <h5>IMAGE DETAILS</h5>
            <p>
              <span>Contribution :</span>{" "}
              <span>
                <a href="!#">Incamerastock </a> / {singleData.alt_description}
              </span>
            </p>
            <p>
              <span>Color :</span> <span>{singleData.color}</span>
            </p>
            <p>
              <span>Created at :</span>{" "}
              <span>
                {singleData.created_at}
                <a className="ms-3" href="!#">
                  {" "}
                  Creation date{" "}
                </a>
              </span>
            </p>
            <p>
              <span>Height :</span> <span>{singleData.height}</span>
            </p>
            <p>
              <span>Views :</span> <a href="!#">{singleData.views}</a>
            </p>
            <p>
              <span>Description :</span> <span>{singleData.description}</span>
            </p>
            <p>
              <span>Updated at :</span> <span>{singleData.updated_at}</span>
            </p>
          </div>
        </div>
      )}
      <div className="container stock-photos mt-5">
        <div className="photo">
          <h5>Stock photos by same contributor</h5>
          <a href="!#">View all</a>
          <span></span>
        </div>
        <div>
          {searchTerm ? (
            <div className="photo-collection mt-4">
              {allData.map((image) => (
                <div key={image.id} className="all-photos">
                  <img src={image.urls.small} alt={image.description} />
                </div>
              ))}
            </div>
          ) : (
            <div className="photo-collection mt-4">
              {data.map((image) => (
                <div key={image.id} className="all-photos">
                  <img src={image.urls.small} alt={image.description} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="container more-buttons mt-5">
        {searchName.map((item) => (
          <button key={item.id}>
            <i className="bi bi-search"></i> {item.title}
          </button>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default ImageDetail;
