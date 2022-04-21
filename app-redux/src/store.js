import { configureStore } from "@reduxjs/toolkit";
import nameReducer from "./feature/nameSlice";

export default configureStore({
  reducer: {
    nameReducer: nameReducer,
  },
});
