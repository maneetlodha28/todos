import React, { useState } from "react";

import {
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
  Form,
  Container,
} from "reactstrap";

import { v4 } from "uuid";
interface addTodoProps {
  addTodos:(todo:{title:string,id:string})=>void
}

const TodoForm: React.FC<addTodoProps> = ({ addTodos }) => {
  const [todoString, setTodoString] = useState("");

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();

    if (todoString === "") {
      return alert("Pleasea add a ToDO");
    }

    const todo = {
      title: todoString,
      id: v4(),
    };

    addTodos(todo);

    setTodoString("");
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <InputGroup className="form-p">
            <Input
              type="text"
              name="todo"
              id="todo"
              placeholder="Enter a todo"
              value={todoString}
              onChange={(e) => setTodoString(e.target.value)}
            />

            <InputGroupAddon addonType="append">
              <Button className="button">Add Todo</Button>
            </InputGroupAddon>
          </InputGroup>
        </FormGroup>
      </Form>
    </div>
  );
};

export default TodoForm;
