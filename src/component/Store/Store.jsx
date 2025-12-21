import { configureStore } from "@reduxjs/toolkit";
import slicer1Reducer from "./Slicer_bg"
import todoreduxer from "./Slicer2_todo"

const Store = configureStore({
  reducer: {
    slicer1: slicer1Reducer,
    todo:todoreduxer,
  },
});

export default Store;
