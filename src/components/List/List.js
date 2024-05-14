
import React, { useState, useEffect } from 'react';
import Add from '../Add/Add';
import Task from '../Task/task';
import Clear from '../Clear/Clear';

function List({ tab, updateTabs }) {
    const [tasks, setTasks] = useState(tab.tasks);

    useEffect(() => {
        setTasks(tab.tasks);
    }, [tab.tasks]);

    const addTask = (newTask) => {
        const taskList = [...tasks, newTask];
        updateTabTasks(taskList);
    };

    const deleteTask = (taskId) => {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        updateTabTasks(updatedTasks);
    };

    const editTask = (taskId, newName) => {
        const updatedTasks = tasks.map(task => (task.id === taskId ? { ...task, name: newName, isEditing: false } : task));
        updateTabTasks(updatedTasks);
    };

    const clearAllTasks = () => {
        updateTabTasks([]);
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

    const updateTabTasks = (updatedTasks) => {
        const updatedTab = { ...tab, tasks: updatedTasks };
        updateTabs(updatedTab);
        setTasks(updatedTasks);
    };

    const handleDragStart = (event, taskId) => {
        event.dataTransfer.setData("taskId", taskId);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event, droppedIndex) => {
        event.preventDefault();
        const draggedTaskId = parseInt(event.dataTransfer.getData("taskId"));
        const draggedTaskIndex = tasks.findIndex(task => task.id === draggedTaskId);
        const updatedTasks = [...tasks];
        const [draggedTask] = updatedTasks.splice(draggedTaskIndex, 1);
        updatedTasks.splice(droppedIndex, 0, draggedTask);
        updateTabTasks(updatedTasks);
    };

    return (
        <div className="min-h-screen flex justify-center items-center p-6">
            <div className="w-full max-w-[500px]">
                <h1 className="text-center mb-4 text-3xl font-serif">To Do List with React and Tailwind</h1>
                <div className="w-full bg-foregroundColor p-6 rounded-xl overflow-y-scroll max-h-[600px]">
                    <div>
                        <Clear clearAllTasks={clearAllTasks} />
                    </div>
                    <ul>
                        {tasks.map((task, index) => (
                            <li key={task.id} draggable onDragStart={(event) => handleDragStart(event, task.id)} onDragOver={handleDragOver} onDrop={(event) => handleDrop(event, index)}>
                                <Task task={task} deleteTask={deleteTask} editTask={editTask} startEditing={startEditing} cancelEditing={cancelEditing} checkedTask={checkedTask} />
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