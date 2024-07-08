import React, { useState, useEffect } from 'react';
import Task from '../ElementOfTask/task';
import './Tasks.css';

function List({ tab, darkMode, updateTabTasks, categoryId, updateTabs}) {
    const [tasks, setTasks] = useState(tab.tasks || []);

    useEffect(() => {
        setTasks(tab.tasks || []);
    }, [tab.tasks]);

  
    const deleteTask = (taskId) => {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        updateTabTasks(updatedTasks);
    };

    const editTask = (taskId, newName) => {
        const updatedTasks = tasks.map(task => (task.id === taskId ? { ...task, name: newName, isEditing: false } : task));
        updateTabTasks(updatedTasks);
    };


    const startEditing = (taskId) => {
        const updatedTasks = tasks.map(task => (task.id === taskId ? { ...task, isEditing: true } : { ...task, isEditing: false }));
        updateTabTasks(updatedTasks);
    };

    const cancelEditing = () => {
        const updatedTasks = tasks.map(task => ({ ...task, isEditing: false }));
        updateTabTasks(updatedTasks);
    };

    const checkedTask = (taskId) => {
        const updatedTasks = tasks.map(task => (task.id === taskId ? { ...task, isChecked: !task.isChecked } : task));
        updateTabTasks(updatedTasks);
    };
   
    const handleDragStart = (event, taskId) => {
        event.dataTransfer.setData("text/plain", taskId.toString());
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };
    
    
    const handleDrop = (event, droppedIndex) => {
        event.preventDefault();
        const draggedTaskId = event.dataTransfer.getData("text/plain");
        console.log('Drop:', draggedTaskId, 'at index', droppedIndex);
        const draggedTaskIndex = tasks.findIndex(task => task.id === draggedTaskId);
        const updatedTasks = [...tasks];
        const [draggedTask] = updatedTasks.splice(draggedTaskIndex, 1);
        draggedTask.categoryId = categoryId;
        updatedTasks.splice(droppedIndex, 0, draggedTask);
        updateTabTasks(updatedTasks);
    };
    
    return (
        <div>
            <ul>
                {tasks.filter(task => task.categoryId === categoryId).map((task, index) => (
                    <li key={task.id} draggable onDragStart={(event) => handleDragStart(event, task.id)} onDragOver={handleDragOver} onDrop={(event) => handleDrop(event, index)}>
                        <Task updateTabTasks={updateTabTasks} updateTabs={updateTabs} task={task} deleteTask={deleteTask} editTask={editTask} startEditing={startEditing} cancelEditing={cancelEditing} checkedTask={checkedTask} darkMode={darkMode} tab={tab}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default List;   