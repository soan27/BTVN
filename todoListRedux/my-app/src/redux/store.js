import {
  combineReducers,
  applyMiddleware,
  configureStore,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { listReducer } from "./reducers/listReducer";

const reducer = combineReducers({
  todoItems: listReducer,
});

let todoItemsFromStorage = localStorage.getItem("listItems")
  ? JSON.parse(localStorage.getItem("listItems"))
  : [];
const initialState = {
  todoItems: { todolist: todoItemsFromStorage },
};

const store = configureStore({
  reducer,
  initialState,
  //   composeWithDevTools(applyMiddleware(...middleware)),
});

export default store;
