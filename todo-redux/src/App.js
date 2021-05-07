import "./App.css";
import { useSelector } from "react-redux";
import TodoCard from "./components/TodoCard";
import AddTodo from "./components/AddTodo";
export default function App() {
  const todoList = useSelector((state) => state.todos);
  return (
    <div className="App">
      <AddTodo  />
      
      {todoList.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
