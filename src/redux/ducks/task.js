export const GET_TASK_REQUEST = "get_task_request";
export const GET_TASKS_REQUEST = "get_tasks_request";
export const CREATE_TASK_REQUEST = "create_task_request";
export const UPDATE_TASK_REQUEST = "update_task_request";
export const DELETE_TASK_REQUEST = "delete_task_request";
const SET_TASK = "set_task";
const SET_TASKS = "set_tasks";
const DELETE_TASK = "delete_task";

export const getTaskRequest = (id) => ({
  type: GET_TASK_REQUEST,
  id,
});

export const getTasksRequest = (search) => ({
  type: GET_TASKS_REQUEST,
  search,
});

export const createTaskRequest = (task, navigate, url) => ({
  type: CREATE_TASK_REQUEST,
  task,
  navigate,
  url,
});

export const updateTaskRequest = (id, task, navigate, url) => ({
  type: UPDATE_TASK_REQUEST,
  id,
  task,
  navigate,
  url,
});

export const deleteTaskRequest = (id) => ({
  type: DELETE_TASK_REQUEST,
  id,
});

export const setTask = (task) => ({
  type: SET_TASK,
  task,
});

export const setTasks = (tasks) => ({
  type: SET_TASKS,
  tasks,
});

export const deleteTask = (task) => ({
  type: DELETE_TASK,
  removedtask: task,
});

const initialState = {
  tasks: undefined,
  task: undefined,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASK: {
      const { task } = action;
      if (task === undefined) return { ...state, task: undefined };
      return { ...state, task };
    }
    case SET_TASKS: {
      const { tasks } = action;
      return { ...state, tasks };
    }
    case DELETE_TASK: {
      const { removedtask } = action;
      return {
        ...state,
        tasks: state.tasks.filter((v) => v.id !== removedtask.id),
      };
    }
    default:
      return state;
  }
};

export default reducer;
