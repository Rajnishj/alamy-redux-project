import {
  GET_DATA,
  REMOVE_FETCH_DATA,
  GET_SINGLE_DATA,
  GET_ALL_DATA,
  GET_JSON_DATA,
} from "./types";
import ImageApi from "../common/apis/ImageApi";
import { APIKey } from "../common/apis/ImageApiKey";
import axios from "axios";

export const fetchAllData = () => async (dispatch) => {
  const res = await ImageApi.get(`photos?client_id=${APIKey}`);
  const data = res.data;
  dispatch({
    type: GET_ALL_DATA,
    payload: data,
  });
};
export const fetchJsonData = () => async (dispatch) => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const data = res.data;
    console.log(data);
    dispatch({
      type: GET_JSON_DATA,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getData = (text) => async (dispatch) => {
  const res = await ImageApi.get(
    `search/photos?page=2&query=${text}&client_id=${APIKey}`
  );
  const data = res.data.results;
  dispatch({
    type: GET_DATA,
    payload: data,
  });
};
export const singleDetail = (id) => async (dispatch) => {
  const res = await ImageApi.get(`photos/${id}?&client_id=${APIKey}`);
  const data = res.data;
  dispatch({
    type: GET_SINGLE_DATA,
    payload: data,
  });
};
export const removeFetchData = () => {
  return {
    type: REMOVE_FETCH_DATA,
  };
};
