import "./App.css";
import { useState } from "react";
import InputTask from "./components/InputTask";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
export default function App() {
  const [todoList, settodoList] = useState([]);
  const [inputValue, setinputValue] = useState("");
  const onchangeInput = (el) => {
    setinputValue(el.target.value);
  };

  const addTask = () => {
    let newList = [inputValue, ...todoList];
    settodoList(newList);
    setinputValue("");
  };

  const deleteTask = (index) => {
    let newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    settodoList(newTodoList);
  };
  return (
    <div className="wrapper">
      <header>Todo App</header>
      <InputTask
        inputValue={inputValue}
        onchangeInput={onchangeInput}
        addTask={addTask}
      />
      <TodoList todoList={todoList} deleteTask={deleteTask} />
      <Footer todoList={todoList} />
    </div>
  );
}
