
import React, { useState, useEffect } from 'react';
import Add from '../Add/Add';
import Task from '../Task/task';
import Clear from '../Clear/Clear';
import EditTab from '../ElementOfTabs/EditTab';
import './List.css';
import { useTranslation } from 'react-i18next';

function List({ tab, updateTabs, darkMode}) {
    const [tasks, setTasks] = useState(tab.tasks);
    const { t } = useTranslation();

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

    const checkedCount = () => {
        return tasks.filter(task => task.isChecked).length;
    }

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
        <div>
            <div className=" flex justify-center items-center p-4">
                <div className="w-full md:w-4/6">
                    <div className={`w-full p-6 overflow-y-scroll max-h-[900px] border-2 ${darkMode ? 'bg-gray-800 border-white' : 'bg-neutral-400 border-black'} ${checkedCount() > 4 ? 'glowing-effect' : ''}`}>
                    <EditTab tab={tab} updateTabs={updateTabs} darkMode={darkMode}></EditTab>
                        <div className='flex py-4'>
                            <Clear clearAllTasks={clearAllTasks} darkMode={darkMode}/>
                        </div>
                        <ul>
                            {tasks.map((task, index) => (
                                <li key={task.id} draggable onDragStart={(event) => handleDragStart(event, task.id)} onDragOver={handleDragOver} onDrop={(event) => handleDrop(event, index)}>
                                    <Task task={task} deleteTask={deleteTask} editTask={editTask} startEditing={startEditing} cancelEditing={cancelEditing} checkedTask={checkedTask} darkMode={darkMode}/>
                                </li>
                            ))}
                        </ul>
                        <p className={` ${darkMode ? 'text-white' : 'text-black'} ${checkedCount() === 0 ? 'hidden' : ''}`}>{t('SentenceOfNumberChecked', { count: checkedCount() })}</p>
                        <Add addTask={addTask} darkMode={darkMode}/>
                    </div>
                </div>
            </div>
            <div className='flex justify-center max-[650px]:hidden'>
                <div className={` ${checkedCount() > 4 ? 'balloon' : ''}`}></div>
                <div className={` ${checkedCount() > 4 ? 'balloon' : ''}`}></div>
                <div className={` ${checkedCount() > 4 ? 'balloon' : ''}`}></div>
                <div className={` ${checkedCount() > 4 ? 'balloon' : ''}`}></div>
                <div className={` ${checkedCount() > 4 ? 'balloon' : ''}`}></div>
            </div>
        </div>
    );
}

export default List;   