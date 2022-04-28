import React, { useState, useEffect } from "react";
import MainFooter from "../Footer/MainFooter";
import Header from "../Header/Header";
import {
  fetchJsonData,
  getData,
  removeFetchData,
} from "../../actions/ImageAction";
import "./alamy.scss";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

const Alamy = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const data = useSelector((state) => state.image.jsonData);
  console.log(data);

  useEffect(() => {
    dispatch(getData());
    dispatch(fetchJsonData());
    return () => {
      dispatch(removeFetchData());
    };
  }, [dispatch]);

  const onChangeHandle = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = () => {
    dispatch(getData(text));
  };
  return (
    <div className="container-fluid main">
      <Header />
      <div className="blank-page mt-5">
        <h1>own the blank page</h1>
        <p>Be braver. Go further</p>
        <div className="search-bar">
          <span>
            <i className="bi bi-image"></i>All Images{" "}
            <i className="bi bi-caret-down"></i>
          </span>
          <input
            type="text"
            value={text}
            placeholder="Start here"
            onChange={onChangeHandle}
          />
          <i className="bi bi-camera-fill"></i>
          <Link
            to={{
              pathname: `/image`,
            }}
          >
            <button onClick={handleSubmit}>
              <i className="bi bi-search"></i>
            </button>
          </Link>
        </div>
      </div>

      <MainFooter
        header="Alternative Inspiration"
        para="Don't start with the same content as everyone else.Find over 150,000new, unexcepted content assets daily"
        text="See fresh content"
      />
    </div>
  );
};

export default Alamy;
