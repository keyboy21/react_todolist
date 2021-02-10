import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [InputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterStatus, setFilterStatus] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilterStatus(todos.filter((todo) => todo.completed === true));
        break;

      case "uncompleted":
        setFilterStatus(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilterStatus(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <div className="all">
        <header>
          <h1>Todo List</h1>
        </header>
        <Form
          todos={todos}
          setTodos={setTodos}
          setInputText={setInputText}
          InputText={InputText}
          setStatus={setStatus}
        />
        <TodoList
          filterStatus={filterStatus}
          setTodos={setTodos}
          todos={todos}
        />
      </div>
    </div>
  );
}

export default App;
