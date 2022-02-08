import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tasks from "./Tasks/Tasks";
import EditTask from "./Tasks/EditTask/EditTask";
import CreateTask from "./Tasks/CreateTask/CreateTask";
import Header from "./Header/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Tasks />} />
          <Route path="/create/" element={<CreateTask />} />
          <Route path="/edit/:id" element={<EditTask />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
