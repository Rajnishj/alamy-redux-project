import {
  GET_ALL_DATA,
  GET_DATA,
  GET_JSON_DATA,
  GET_SINGLE_DATA,
  REMOVE_FETCH_DATA,
} from "../actions/types";

const initialState = {
  images: [],
  selectedImage: {},
  allImages: [],
  jsonData: [],
};

const ImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DATA:
      return {
        ...state,
        allImages: action.payload,
      };
    case GET_DATA:
      return {
        ...state,
        images: action.payload,
      };
    case REMOVE_FETCH_DATA:
      return {
        ...state,
        images: [],
      };
    case GET_SINGLE_DATA:
      return {
        ...state,
        selectedImage: action.payload,
      };
    case GET_JSON_DATA:
      return {
        ...state,
        jsonData: action.payload,
      };
    default:
      return state;
  }
};
export default ImageReducer;
