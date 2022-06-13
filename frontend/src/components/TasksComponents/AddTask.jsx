import React from "react";
import { Form, Button, Row, Col, Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
    updateTask,
    createTask,
} from "/Users/edwin/Desktop/to-do/frontend/src/features/task/TaskSlice";
import SpinnerComponent from "../spinner/SpinnerComponent";

function AddTask({ taskData, setTaskData, onChange, taskName, author }) {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const { isLoading, isError, isSuccess } = useSelector(
        (state) => state.tasks
    );

    const handleTaskSubmit = (e) => {
        e.preventDefault();
        if (taskData._id) {
            const id = taskData._id;
            const updatedTask = {
                taskName: taskData.taskName,
                author: user.name,
            };
            const data = {
                updatedTask,
                id
            }
            dispatch(updateTask(data));
        } else {
            dispatch(createTask(taskData));
        }
        setTaskData({
            taskName: "",
            author: user.name,
        });
        if(isLoading) {
            return <SpinnerComponent />
        }
    };
    return (
        <div>
            <Form className="input-form" onSubmit={handleTaskSubmit}>
                <Row>
                    <Col md={10}>
                        <Form.Group>
                            <Form.Control
                                type="text"
                                placeholder="enter task"
                                name="taskName"
                                value={taskName}
                                onChange={onChange}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group hidden>
                            <Form.Control
                                type="text"
                                placeholder="enter task"
                                name="author"
                                value={user.name}
                                onChange={onChange}
                            ></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col md={2}>
                        <Button
                            variant="primary"
                            type="submit"
                            style={{ width: "100%" }}
                        >
                            <i className="fas fa-paper-plane"></i>
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}

export default AddTask;
