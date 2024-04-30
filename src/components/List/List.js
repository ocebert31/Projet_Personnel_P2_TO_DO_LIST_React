import React, { useState, useEffect } from 'react';
import Add from '../Add/Add';
import Task from '../Task/task';
import Clear from '../Clear/Clear';

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
                return { ...task, name: newName, isEditing: false };
            }
            return task;
        });
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    const startEditing = (taskId) => {
        const updatedTask = tasks.map(task => {
            if (task.id === taskId) {
                return { ...task, isEditing: true };
            }
            return  { ...task, isEditing: false };
        });
        setTasks(updatedTask);
        localStorage.setItem('tasks', JSON.stringify(updatedTask));
    }

    const cancelEditing = () => {
        const updatedTask = tasks.map(task => {
            return  { ...task, isEditing: false };
        });
        setTasks(updatedTask);
        localStorage.setItem('tasks', JSON.stringify(updatedTask));
    }

    const checkedTask = (taskId) => {
        const editedTask = tasks.map(task => {
            if (task.id === taskId) {
                return { ...task, isChecked: !task.isChecked };
            }
            return task;
        });
        setTasks(editedTask);
        localStorage.setItem('tasks', JSON.stringify(editedTask));
    }

    const clearAllTasks = () => {
        setTasks([]);
        localStorage.removeItem('tasks');
    };

    // lorsque l'utilisateur commence à faire glisser un élément
    const handleDragStart = (event, taskId) => {
        event.dataTransfer.setData("taskId", taskId);
    };

    //lorsque l'élément est survolé pendant le glisser-déposer
    const handleDragOver = (event) => {
        event.preventDefault();
    };

    // l'utilisateur lâche l'élément 
    const handleDrop = (event, droppedIndex) => {
        event.preventDefault();
        const draggedTaskId = event.dataTransfer.getData("taskId");
        const draggedTaskIndex = tasks.findIndex(task => task.id === draggedTaskId);
        const updatedTasks = [...tasks];
        const [draggedTask] = updatedTasks.splice(draggedTaskIndex, 1);
        updatedTasks.splice(droppedIndex, 0, draggedTask);
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-backgroundColor">
            <div>
                <h1 className="text-center mb-4 text-3xl font-serif">To Do List with React and Tailwind</h1>
                <div className="w-full max-w-md bg-foregroundColor p-6 rounded-lg">
                    <div>
                        <Clear clearAllTasks={clearAllTasks}></Clear>
                    </div>
                    <ul>
                        {tasks.map((task, index) => (
                            <li key={task.id} draggable onDragStart={(event) => {handleDragStart(event, task.id)}} onDragOver={handleDragOver} onDrop={(event) => handleDrop(event, index)}>
                                <Task task={task} deleteTask={deleteTask} editTask={editTask} startEditing={startEditing} cancelEditing={cancelEditing} checkedTask={checkedTask}/>
                            </li>
                        ))}
                    </ul>
                    <Add addTask={addTask} />
                </div>
            </div>
        </div>
    );
    
}

export default List;
