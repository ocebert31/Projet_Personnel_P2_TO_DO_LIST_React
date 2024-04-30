import React from 'react';
import DeleteButton from '../ElementOfTask/DeleteButton';
import EditName from '../ElementOfTask/EditName';

function Task({ task, editTask, deleteTask, startEditing, cancelEditing, checkedTask}) {
    const handleDeleteClick = () => {
         deleteTask(task.id);
    };

    return (
        <div className='flex'>
            <EditName task={task} editTask={editTask} startEditing={startEditing} cancelEditing={cancelEditing} checkedTask={checkedTask}/>
            <DeleteButton onClick={handleDeleteClick} />
        </div>
    )
 }

export default Task;

