import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Todos from "./Components/Todos";
import TodoForm from "./Components/TodoForm";
import { Todo } from "./todos.model";
const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    
    if (localTodos) {
      setTodos(JSON.parse(localTodos));
    }
  }, []);

  const addTodos = async (todo: {title:string, id:string}) => {
    setTodos([...todos, todo]);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)); 
  }, [todos]); 

  const markcomplete = (id:string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container-center">
      <Container fluid>
        <h1 style={{ textAlign: "center" }}>Todos</h1>
        <hr></hr>
        <TodoForm addTodos={addTodos} />
        <Todos todos={todos} markComplete={markcomplete} />
      </Container>
    </div>
  );
};

export default App;
