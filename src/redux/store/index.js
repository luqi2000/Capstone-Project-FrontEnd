import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers";

const store = configureStore({
  //reducer
  reducer: mainReducer
});
export default store;
