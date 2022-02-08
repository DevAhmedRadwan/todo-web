import HeaderStyle from "./Header.module.css";
import { Button, Container, Form, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getTasksRequest } from "../redux/ducks/task";

function Header() {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  // search event to get the updated tasks
  const onSearch = (e) => {
    e.preventDefault();
    dispatch(getTasksRequest(search));
  };

  const navigate = useNavigate();

  // create task event navigate to create page
  const onClickHome = () => {
    navigate(`/`);
  };

  // create task event navigate to create page
  const onClickCreate = () => {
    navigate(`/create/`);
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className={HeaderStyle.brand} onClick={onClickHome}>
          TO DO
        </Navbar.Brand>
        <div className={HeaderStyle.searchInput}>
          <Form onSubmit={onSearch}>
            <Form.Control
              type="text"
              placeholder="Search by title and description"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Form>
        </div>
        <Button
          className={HeaderStyle.createTaskBtn}
          type="button"
          onClick={onClickCreate}
        >
          Create Task
        </Button>
      </Container>
    </Navbar>
  );
}

export default Header;
