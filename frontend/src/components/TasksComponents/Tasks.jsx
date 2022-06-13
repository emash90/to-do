import React from "react";
import ListTasks from "./ListTasks";
import AddTask from "./AddTask";
import "./Tasks.css";
import { useState } from "react";
import {useSelector} from 'react-redux'


function Tasks() {
    const { user } = useSelector((state) => state.auth);
    const [taskData, setTaskData] = useState({
        taskName: "",
        author: user.name,
    });
    const { taskName, author } = taskData;
    const onChange = (e) => {
        setTaskData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    return (
        <div className="task-container">
            <AddTask taskName={taskName} author={author} taskData={taskData} setTaskData={setTaskData} onChange={onChange} />
            <ListTasks taskName={taskName} author={author} setTaskData={setTaskData} onChange={onChange} />
        </div>
    );
}

export default Tasks;
