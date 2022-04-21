import React from "react";
import TodoItem from "./TodoItem";
export default function TodoList(props) {
  const renderList = () => {
    return props.todoList.map((item, index) => {
      return (
        <TodoItem
          item={item}
          key={index}
          deleteTask={props.deleteTask}
          index={index}
        />
      );
    });
  };
  return <div className="todoList">{renderList()}</div>;
}
