import { Button, ButtonGroup, CloseButton, Form } from "react-bootstrap";
import { nanoid } from "nanoid";
import React from "react";

const Tasks = (props) => {
  const { inputTodo, setInputTodo, todos, setTodos } = props;

  const inputTodoHandler = (event) => setInputTodo(event.target.value);

  const submitHandler = (event) => {
    event.preventDefault();
    setTodos([...todos, { id: nanoid(), task: inputTodo }]);
    setInputTodo("");
  };

  const editToggle = (event) => {
    const selectedId = event.target.attributes.value.value;
    const selectedInputTodo = document.getElementById(selectedId);
    selectedInputTodo.disabled = !selectedInputTodo.disabled;
    selectedInputTodo.focus();

    //make todo sibling save button appear with changing display style
    const saveButton = selectedInputTodo.parentElement.lastChild.firstChild;
    saveButton.style.display = "block";
  };

  const saveHandler = (event) => {
    const selectedId = event.target.attributes.value.value;
    const selectedInputTodo = document.getElementById(selectedId);
    const saveButton = selectedInputTodo.parentElement.lastChild.firstChild;

    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === selectedId) {
        [...todos][i].task = selectedInputTodo.value;
        //make todo sibling save button disappear with changing display style
        saveButton.style.display = "none";
        selectedInputTodo.disabled = !selectedInputTodo.disabled;
      }
    }
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
      <input defaultValue={todo.task} type="text" style={{ border: "none" }} disabled={true} id={todo.id} />
      <ButtonGroup>
        <Button className="btn-sm btn-success" onClick={saveHandler} value={todo.id} style={{ display: "none" }}>
          <i className="bi bi-file-arrow-up" value={todo.id}></i> Save
        </Button>
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
