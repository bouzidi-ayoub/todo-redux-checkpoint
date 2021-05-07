import { COMPLETE_TODO, EDITABLE, EDIT_TODO, ADD_TODO } from "../constants/actionsTypes";


// export const editTodo = (idTodo, editedTodo) => {
//   return { type: EDIT_TODO, id: idTodo, edited: editedTodo };
// };
export const editTodo = (payload) => {
  return { type: EDIT_TODO, payload };
};
export const addTodo=(newTodo)=>{
    return{
        type:ADD_TODO,a:newTodo
    
}};
export const completeTodo = (idTodo) => {
  return {
    type: COMPLETE_TODO,
    payload: idTodo
  };
};
export const editableTodo = (idTodo) => {
  return {
    type: EDITABLE,
    payload: idTodo
  };
};
