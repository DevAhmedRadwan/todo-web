import CreateTasksStyle from "./CreateTask.module.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { createTaskRequest } from "../../redux/ducks/task";
import { Button, Card, Form } from "react-bootstrap";

function CreateTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // create the new task
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTaskRequest({ title, description }, navigate, "/"));
  };

  return (
    <div className={CreateTasksStyle.container}>
      <Card className={CreateTasksStyle.formCard}>
        <Form onSubmit={handleSubmit}>
          <h3>Task</h3>
          <Form.Control
            className={CreateTasksStyle.title}
            type="text"
            placeholder="Task title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></Form.Control>
          <Form.Control
            className={CreateTasksStyle.description}
            as="textarea"
            rows="10"
            placeholder="Task description"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></Form.Control>
          <Button className={CreateTasksStyle.submitBtn} type="submit">
            Create
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default CreateTask;
