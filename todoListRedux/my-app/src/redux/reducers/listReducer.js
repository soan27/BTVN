import {
  LIST_ADD,
  LIST_DELETE,
  LIST_ADD_DONE,
  LIST_REMOVE_DONE,
} from "../../constants/ListConstant";

export const listReducer = (
  state = { todolist: [], repeat: false },
  action
) => {
  switch (action.type) {
    case LIST_ADD:
      const newList = action.payload;
      const checkName = state.todolist.find(
        (x) => x.name === action.payload.name
      );

      if (!checkName) {
        return {
          ...state,
          repeat: false,
          todolist: [...state.todolist, newList],
        };
      } else {
        return {
          ...state,
          repeat: true,
        };
      }
    case LIST_DELETE:
      return {
        ...state,
        todolist: state.todolist.filter((x) => x.name !== action.payload),
      };
    case LIST_ADD_DONE:
      const existNote = state.todolist.find(
        (x) => x.name === action.payload.name
      );
      console.log("exit ", existNote);

      return {
        ...state,
        todolist: state.todolist.map((x) =>
          x.name === existNote.name ? action.payload : x
        ),
      };
    case LIST_REMOVE_DONE:
      const unCompleteNote = state.todolist.find(
        (x) => x.name === action.payload.name
      );
      return {
        ...state,
        todolist: state.todolist.map((x) =>
          x.name === unCompleteNote.name ? action.payload : x
        ),
      };

    default:
      return state;
  }
};
