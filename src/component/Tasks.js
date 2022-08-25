import { Button, ButtonGroup, CloseButton, Form } from "react-bootstrap";
import { nanoid } from "nanoid";
import React from "react";

const Tasks = (props) => {
  const { inputTodo, setInputTodo, todos, setTodos, deleteTodo, setDeleteTodo } = props;

  const [disabled, setDisabled] = React.useState(true);

  const inputTodoHandler = (event) => setInputTodo(event.target.value);

  const submitHandler = (event) => {
    event.preventDefault();
    setTodos([...todos, { id: nanoid(), task: inputTodo }]);
    setInputTodo("");
  };

  const editToggle = (event) => {
    const selectedId = event.target.attributes.value.value;

    setDisabled((prevDisabled) => !prevDisabled);
  };

  const deleteHandler = (event) => {
    const selectedId = event.target.attributes.value.value;

    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === selectedId) {
        const newTodos = [...todos];
        newTodos.splice(i, i + 1);
        setTodos(newTodos);
      }
    }
  };

  const todosList = todos.map((todo) => (
    <li key={todo.id} className="list-group-item d-flex justify-content-between align-items center">
      <input defaultValue={todo.task} type="text" style={{ border: "none" }} disabled={disabled} />
      <ButtonGroup>
        <Button className="btn-sm" onClick={editToggle} value={todo.id}>
          <i className="bi bi-pencil" value={todo.id}></i>
        </Button>
        <Button className="btn-sm btn-danger" onClick={deleteHandler} value={todo.id}>
          <i className="bi bi-trash" value={todo.id}></i>
        </Button>
      </ButtonGroup>
    </li>
  ));

  return (
    <div className=" container mt-3 bg-secondary" style={{ height: "100vh" }}>
      <div className="d-flex justify-content-between align-items center " style={{ width: "100%" }}>
        <Button>Reset</Button>
        <div>Tasks</div>
        <CloseButton></CloseButton>
      </div>
      <Form className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Task" aria-label="Task" aria-describedby="button-addon2" onChange={inputTodoHandler} value={inputTodo} />
        <Button className="btn btn-outline-secondary text-white" type="submit" id="button-addon2" onClick={submitHandler}>
          <i className="bi bi-plus-square"></i>
        </Button>
      </Form>
      <div>
        <ul className="list-group list-group-flush">{todosList}</ul>
      </div>
    </div>
  );
};

export default Tasks;
