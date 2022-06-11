import React, { useEffect } from "react";
import "./Register.css";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  reset,
  register,
} from "/Users/edwin/Desktop/to-do/frontend/src/features/auth/AuthSlice";
import SpinnerComponent from '../spinner/SpinnerComponent'

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
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
        email
    }
    dispatch(register(userData))
  };
  const { username, email, password } = formData;
  const navigate = useNavigate()
  const dispatch =useDispatch()
  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)
  useEffect(() => {
      if(isError) {
          toast.error(message)
      }
      if(isSuccess || user) {
          navigate('/task')
      }
      dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])
  if (isLoading) {
      return <SpinnerComponent /> 
  }
  return (
    <div>
      <div className="background-banner"></div>
      <div className="login-form">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label hidden>email</Form.Label>
            <Form.Control
              type="email"
              placeholder="enter your email"
              onChange={onChange}
              value={email}
              name="email"
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicUsername">
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
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Register;
