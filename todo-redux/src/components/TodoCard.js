import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  completeTodo,
  editableTodo,
  editTodo
} from "../Js/actions/TodoActions";

const TodoCard = ({ todo }) => {
  const [input, setInput] = useState(todo.text);
  const dispatch = useDispatch();
  const complete = () => {
    dispatch(completeTodo(todo.id));
  };
  const ediatbl = () => {
    dispatch(editableTodo(todo.id));
  };
  const editt = () => {
    dispatch(editTodo({ index: todo.id, selected: input }));
  };
  return (
    <div>
      {todo.editable ? (
        <>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={editt}>save</button>
          <button onClick={ediatbl}>cancel</button>
        </>
      ) : (
        <>
          {" "}
          <p style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
            {" "}
            {todo.text}{" "}
          </p>
          <button onClick={complete}>complete</button>
          <button onClick={ediatbl}>edit</button>
        </>
      )}
    </div>
  );
};
export default TodoCard;
