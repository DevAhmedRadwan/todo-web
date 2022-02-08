import TaskCardStyle from "./TaskCard.module.css";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteTaskRequest } from "../../redux/ducks/task";

function Task(props) {
  const { task } = props;
  const { id, title, description } = task;

  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/edit/${id}`);
  };

  const dispatch = useDispatch();

  // need to update the list on request succeed
  const onDeleteTask = () => {
    dispatch(deleteTaskRequest(id));
  };

  return (
    <Card className={TaskCardStyle.card}>
      <div className={TaskCardStyle.content}>
        <h4>{title}</h4>
        <h6>{description}</h6>
      </div>
      <div className={TaskCardStyle.btnsContainer}>
        <Button variant="warning" type="button" onClick={onClick}>
          Edit
        </Button>
        <div className={TaskCardStyle.spacer}></div>
        <Button variant="danger" type="button" onClick={onDeleteTask}>
          Delete
        </Button>
      </div>
    </Card>
  );
}

export default Task;
