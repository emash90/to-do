import React from "react";
import "./Login.css";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import {
  login,
  reset,
} from '/Users/edwin/Desktop/to-do/frontend/src/features/auth/AuthSlice';
import SpinnerComponent from "../spinner/SpinnerComponent";

function Login() {
  const dispatch = useDispatch()
  const navigate =useNavigate()
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username,
      password,
    };
    dispatch(login(userData));
  };
  const { user, isSuccess, isError, message, isLoading } =useSelector((state) => state.auth)
  
  useEffect(() => {
      if(isError) {
        toast.error(message)
      }
      if(isSuccess || user) {
          navigate('/task')
      }
      dispatch(reset())
  }, [isError, user, dispatch, navigate, message, isSuccess])
  if(isLoading) {
      return <SpinnerComponent />
  }
  return (
    <>
      <div className="background-banner"></div>
      <div className="login-form">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label hidden>username</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter your username"
              onChange={onChange}
              value={username}
              name="username"
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Label hidden>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={onChange}
              value={password}
              name="password"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <div>
            <p>
              No account? <Link to="/register">Register</Link>
            </p>
          </div>
        </Form>
      </div>
    </>
  );
}

export default Login;
