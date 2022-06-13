import axios from "axios";

const API_URI = "http://localhost:5000/api/task/";

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

    console.log(`updated task: ${response.data}`);
    return response.data;
};

const taskService = {
    createTask,
    getTasks,
    deleteTask,
    updateTask,
};

export default taskService;
