import React from "react";
import "./ListTask.css";
import { useEffect } from "react";
import { toast } from 'react-toastify'
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import SpinnerComponent from "../spinner/SpinnerComponent";
import {
    getTasks,
    reset,
    deleteTask,
    checkTask,
} from "/Users/edwin/Desktop/to-do/frontend/src/features/task/TaskSlice";

function ListTasks({ setTaskData, onChange, taskName, author }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const { tasks, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.tasks
    );
    useEffect(() => {
        if (isError) {
            console.log(message);
        }
        dispatch(getTasks());

        return () => {
            dispatch(reset());
        };
    }, [navigate, dispatch, user]);
    const handleDelete = (taskId) => {
        dispatch(deleteTask(taskId));
        return () => {
            dispatch(reset());
        };
    };
    const handleEdit = (taskId, taskData) => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
        const taskToBeEdited = tasks.filter((task) => task._id === taskId);
        setTaskData(taskToBeEdited[0]);
    };
    const handleCheck = (taskId, taskData) => {
        toast('task complete!',
        {position: toast.POSITION.BOTTOM_LEFT})
        const taskToBeEdited = tasks.filter((task) => task._id === taskId);
        setTaskData(taskToBeEdited[0]);
        const data = {
            taskId,
            taskData
        }
        dispatch(checkTask(data, taskId))
        return () => {
            dispatch(reset());
        };
    }
    if (isLoading) {
        return <SpinnerComponent />;
    }
    return (
        <div className="task-list">
            <h2 style={{ marginTop: "15px", textAlign: "center" }}>
                Tasks List
            </h2>
            {tasks.length > 0 ? (
                tasks.map((task) => (
                    <div className="todo-container" key={task._id}>
                        <div className="left-container">
                            <h5>{task.taskName}</h5>
                            <p className="text-muted">
                                added: {moment(task.date).fromNow()}
                            </p>
                        </div>
                        <div className="right-container ms-auto">
                            {task.isComplete ? (
                                <i
                                    className="fa fa-check-square"
                                    style={{color: "#1e6f1e"}}
                                    aria-hidden="true"
                                    onClick={() => {handleCheck(task._id)}}
                                ></i>
                                
                            ) : (
                                <i
                                className="fa fa-check-square"
                                style={{color: "#766d6d"}}
                                aria-hidden="true"
                                onClick={() => {handleCheck(task._id)}}
                            ></i>
                            )}
                            <i
                                className="fa fa-pencil"
                                aria-hidden="true"
                                style={{ color: "#230bff" }}
                                onClick={() => {
                                    handleEdit(task._id);
                                }}
                            ></i>
                            <i
                                className="fa fa-trash"
                                style={{ color: "#ff0b0b" }}
                                aria-hidden="true"
                                onClick={() => {
                                    handleDelete(task._id);
                                }}
                            ></i>
                        </div>
                    </div>
                ))
            ) : (
                <div className="todo-container">
                    <div className="left-container">
                        <h5 style={{ fontWeight: "bolder" }}>
                            You have not yet set any tasks
                        </h5>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ListTasks;
