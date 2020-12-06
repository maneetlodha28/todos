import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Todos from "./Components/Todos";
import TodoForm from "./Components/TodoForm";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    console.log({ localStorage });
    if (localTodos) {
      setTodos(JSON.parse(localTodos));
    }
  }, []);

  const addTodos = async (todo) => {
    setTodos([...todos, todo]);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)); //Local storage cannot store objects dirretly they can only store strings  so covert this into string
  }, [todos]); //moment you find any change in todos just to do all the stuff in call back.

  const markcomplete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container-center">
      <h1 style={{ textAlign: "center" }}>Todos</h1>
      <Container fluid>
        <hr></hr>
        <TodoForm addTodos={addTodos} />
        <Todos todos={todos} markcomplete={markcomplete} />
      </Container>
    </div>
  );
};

export default App;
