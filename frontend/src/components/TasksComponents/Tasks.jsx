import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import ListTasks from './ListTasks'
import './Tasks.css'

function Tasks() {
  return (
    <div className='task-container'>
        <Form className='input-form'>
          <Row>
            <Col md={10}>
                <Form.Group>
                    <Form.Control type='text' placeholder='enter task'></Form.Control>
                </Form.Group>
            </Col>
            <Col md={2}>
                <Button variant='primary' type='submit' style={{width: '100%'}} >
                    <i className='fas fa-paper-plane'></i>
                </Button>
            </Col>
          </Row>
        </Form>
        <ListTasks />
    </div>
  )
}

export default Tasks