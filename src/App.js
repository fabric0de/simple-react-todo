import React from "react";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import "./styles/main.css"; // CSS 파일 import

function App() {
  return (
    <div className="todo-wrapper">
      <TodoHeader />
      <TodoList />
    </div>
  );
}

export default App;
