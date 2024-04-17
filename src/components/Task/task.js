import React from 'react';
import DeleteButton from '../ElementOfTask/DeleteButton';

function task({ task, deleteTask }) {
    const handleDeleteClick = () => {
        deleteTask(task.id);
    };

    return (
        <li className='style-list'>
            {task.name}
            <DeleteButton onClick={handleDeleteClick} />
        </li>
    );
}

export default task;
