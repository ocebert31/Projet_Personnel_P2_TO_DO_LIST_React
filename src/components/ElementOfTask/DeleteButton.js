import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function DeleteButton({ task, onClick }) {
    const isEditing = task.isEditing || false;

    return (
        <button onClick={onClick} className={`text-red-700 ${isEditing ? '' : 'opacity-0 hover:opacity-100'}`}>
            <FontAwesomeIcon icon={faTrash} />
        </button>
    );
}

export default DeleteButton;