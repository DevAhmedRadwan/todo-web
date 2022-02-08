import EditTaskStyle from "./EditTask.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getTaskRequest, updateTaskRequest } from "../../redux/ducks/task";
import { Button, Card, Form } from "react-bootstrap";

function EditTask() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const task = useSelector((state) => state.task.task);

  const dispatch = useDispatch();

  // get the task date that we want to edit
  useEffect(() => {
    dispatch(getTaskRequest(id));
  }, [dispatch, id]);

  // when we have the task data fill the form with it
  useEffect(() => {
    if (task !== undefined) {
      setTitle(task.title);
      setDescription(task.description);
    }
  }, [task]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTaskRequest(id, { title, description }, navigate, "/"));
  };

  return (
    <>
      {task ? (
        <div className={EditTaskStyle.container}>
          <Card className={EditTaskStyle.formCard}>
            <Form onSubmit={handleSubmit}>
              <h3>Task</h3>
              <Form.Control
                className={EditTaskStyle.title}
                type="text"
                placeholder="Task title"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></Form.Control>
              <Form.Control
                className={EditTaskStyle.description}
                as="textarea"
                rows="10"
                placeholder="Task description"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
              <Button className={EditTaskStyle.submitBtn} type="submit">
                Update
              </Button>
            </Form>
          </Card>
        </div>
      ) : (
        <div className={EditTaskStyle.loading}>
          <h1>Loading Task...</h1>
        </div>
      )}
    </>
  );
}

export default EditTask;
