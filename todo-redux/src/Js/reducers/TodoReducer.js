import { createStoreHook } from "react-redux";
import { COMPLETE_TODO, EDITABLE, EDIT_TODO, ADD_TODO } from "../constants/actionsTypes";

const initState = {
  todos: [
    {
      id: 0,
      text: "todo 1",
      isCompleted: false,
      editable: false
    },
    {
      id: 1,
      text: "todo 2",
      isCompleted: false,
      editable: false
    }
  ]
};
export const TodoReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO :return {
      ...state,todos:[...state.todos,action.a]
    }
    case COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo
        )
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.index
            ? {
                ...todo,
                text: action.payload.selected,
                editable: !todo.editable
              }
            : todo
        )
      };
    case EDITABLE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, editable: !todo.editable }
            : todo
        )
      };
    default:
      return state;
  }
};
