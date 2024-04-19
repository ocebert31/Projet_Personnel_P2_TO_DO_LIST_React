import React from 'react';
import DeleteButton from '../ElementOfTask/DeleteButton';
import EditTask from '../ElementOfTask/EditButton';
import './task.css';

function Task({ task, editTask, deleteTask}) {
    const handleDeleteClick = () => {
         deleteTask(task.id);
    };

    return (
        <div className='alignment-button'>
            <EditTask task={task} editTask={editTask}/>
            <DeleteButton onClick={handleDeleteClick} />
        </div>
    )
 }

export default Task;

