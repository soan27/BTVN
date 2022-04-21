import {
  LIST_ADD,
  LIST_DELETE,
  LIST_ADD_DONE,
  LIST_REMOVE_DONE,
} from "../../constants/ListConstant";

export const addList = (name) => async (dispatch, getState) => {
  dispatch({
    type: LIST_ADD,
    payload: {
      name: name,
      complete: false,
    },
  });

  // save to localStorage

  localStorage.setItem(
    "listItems",
    JSON.stringify(getState().todoItems.todolist)
  );
};

export const deleteList = (name) => async (dispatch, getState) => {
  dispatch({
    type: LIST_DELETE,
    payload: name,
  });

  // save to localStorage
  localStorage.setItem(
    "listItems",
    JSON.stringify(getState().todoItems.todolist)
  );
};

export const addDone = (name) => async (dispatch, getState) => {
  dispatch({
    type: LIST_ADD_DONE,
    payload: name,
    complete: true,
  });

  // save to localStorage
  localStorage.setItem(
    "listItems",
    JSON.stringify(getState().todoItems.todolist)
  );
};

export const removeDone = (name) => async (dispatch, getState) => {
  dispatch({
    type: LIST_REMOVE_DONE,
    payload: name,
    complete: false,
  });

  // save to localStorage
  localStorage.setItem(
    "listItems",
    JSON.stringify(getState().todoItems.todolist)
  );
};
