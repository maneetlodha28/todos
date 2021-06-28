import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaCheckDouble } from "react-icons/fa";
import { Todo } from "../todos.model";

interface todosProps {
  todos:Todo[],
  markComplete:(id:string)=>void
}

const Todos: React.FC<todosProps> = ({ todos, markComplete }) => {
  return (
    <ListGroup className="mt-Item5 mb-2 items">
      {todos.map((todo) => (
        <ListGroupItem key={todo.id}>
          {todo.title}
          <span className="float-right" onClick={() => markComplete(todo.id)}>
            <FaCheckDouble />
          </span>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default Todos;
