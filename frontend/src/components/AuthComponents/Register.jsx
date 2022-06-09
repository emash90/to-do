import React from 'react'
import './Register.css'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div>
        <div className='background-banner'></div>
        <div className="login-form">
        <Form>
            <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label hidden>username</Form.Label>
                <Form.Control type="email" placeholder="enter your email" />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label hidden>username</Form.Label>
                <Form.Control type="text" placeholder="enter your username" />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Label hidden>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
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
  )
}

export default Register