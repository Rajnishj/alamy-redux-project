import { combineReducers } from "redux";
import ImageReducer from "./ImageReducer";

const rootReducer = combineReducers({
  image: ImageReducer,
});

export default rootReducer;
