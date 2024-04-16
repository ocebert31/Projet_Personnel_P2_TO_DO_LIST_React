import React, { useState, useEffect } from 'react';
import Add from '../Add/Add';
import './List.css';

function List() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const taskList = JSON.parse(localStorage.getItem('tasks'));
        if (taskList) {
            setTasks(taskList);
        }
    }, []);

    const addTask = (newTask) => {
        console.log(newTask)
        const taskList = [...tasks, newTask];
        setTasks(taskList);
        localStorage.setItem('tasks', JSON.stringify(taskList));
    };

    return (
        <div>
            <h1>To Do List with React</h1>
            <Add addTask={addTask} />
            <ul>
                {tasks.map(task => (
                    <li className='style-list' key={task.id}>{task.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default List;
 

//node_modules/.bin/jest