import React from 'react'
import './ListTask.css'

function ListTasks() {
  return (
    <div className='task-list'>
        <h2 style={{marginTop: '15px'}}>Tasks List</h2>
        <div className='todo-container'>
            <p>to do container Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia inventore enim et aliquid distinctio. Libero quod ipsum eius quibusdam repellendus sequi asperiores, praesentium quos iure sed aut temporibus voluptate quisquam.</p>
        </div>
        <div className='todo-container'>
            <p>to do container to do container Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia inventore enim et aliquid distinctio. Libero quod ipsum eius quibusdam repellendus sequi asperiores, praesentium quos iure sed aut temporibus voluptate quisquam.</p>
        </div>
        <div className='todo-container'>
            <p>to do container to do container Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia inventore enim et aliquid distinctio. Libero quod ipsum eius quibusdam repellendus sequi asperiores, praesentium quos iure sed aut temporibus voluptate quisquam.</p>
        </div>
    </div>
  )
}

export default ListTasks