import { Button, Form } from "react-bootstrap";

const style = {
  width: "100%",
};

const Tasks = (props) => {
  const { inputTodo, setInputTodo, todos, setTodos } = props;

  return (
    <div className="d-flex flex-column justify-content-center align-items-center ">
      <div className="d-flex justify-content-between align-items center " style={style}>
        <button>Reset</button>
        <div>Tasks</div>
        <button>Close</button>
      </div>
      <Form className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
        <Button className="btn btn-outline-secondary" type="submit" id="button-addon2">
          +
        </Button>
      </Form>
      <div>
        <ul></ul>
      </div>
    </div>
  );
};

export default Tasks;
