import TasksStyle from "./Tasks.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import TaskCard from "./TaskCard/TaskCard";

import { getTasksRequest } from "../redux/ducks/task";

function Tasks() {
  // retrieve tasks list from redux
  const tasks = useSelector((state) => state.task.tasks);

  const dispatch = useDispatch();

  // get the tasks list on component load
  useEffect(() => {
    dispatch(getTasksRequest(undefined));
  }, [dispatch]);

  return (
    <>
      {tasks ? (
        <Row className={TasksStyle.container}>
          <Col xs={6}>
            {tasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </Col>
        </Row>
      ) : (
        <div className={TasksStyle.loading}>
          <h1>Loading Tasks...</h1>
        </div>
      )}
    </>
  );
}

export default Tasks;
