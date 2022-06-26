import axios from "axios";

const API_URI = "https://emash-to-do.herokuapp.com/api/task/";

//create tasks

const createTask = async (taskData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.post(API_URI, taskData, config);

    return response.data;
};
//get tasks
const getTasks = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.get(API_URI, config);

    return response.data;
};
//delete task
const deleteTask = async (taskId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const response = await axios.delete(`${API_URI}` + taskId, config);

    return response.data;
};

//edit tasks
const updateTask = async (id, taskData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const response = await axios.put(`${API_URI}` + id, taskData, config);

    return response.data;
};

//check task

const checkTask = async (taskId, taskData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const response = await axios.patch(`${API_URI}` + taskId, taskData, config);

    return response.data;
    console.log(`checked task: ${response.data}`);
};

const taskService = {
    createTask,
    getTasks,
    deleteTask,
    updateTask,
    checkTask
};

export default taskService;
