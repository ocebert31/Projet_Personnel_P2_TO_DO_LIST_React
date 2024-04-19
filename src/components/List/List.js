import React, { useState, useEffect } from 'react';
import Add from '../Add/Add';
import './List.css';
import Task from '../Task/task';

function List() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const savedTaskList = localStorage.getItem('tasks');
        if (savedTaskList)
            setTasks(JSON.parse(savedTaskList));
    }, []);

    const addTask = (newTask) => {
        const taskList = [...tasks, newTask];
        setTasks(taskList);
        localStorage.setItem('tasks', JSON.stringify(taskList));
    };

    const deleteTask = (taskId) => {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    const editTask = (taskId, newName) => {
        const updatedTasks = tasks.map(task => {
            if (task.id === taskId) {
                return { ...task, name: newName }; // Mise à jour du nom de la tâche
            }
            return task;
        });
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    return (
        <div>
            <h1>To Do List with React</h1>
            <Add addTask={addTask} />
            <ul>
                {tasks.map(task => (
                    <Task key={task.id} task={task} deleteTask={deleteTask} editTask={editTask} />
                ))}
            </ul>
        </div>
    );
}

export default List;