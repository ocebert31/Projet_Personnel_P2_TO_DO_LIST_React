import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './DeleteButton.css';

function DeleteButtonOfCategory({ onClick, category}) {
    const isEditing = category.isEditing || false;

    return (
        <button onClick={onClick} className={`text-red-700 pr-6 ${isEditing ? '' : 'opacity-0 hover:opacity-100 hide-on-mobile'}`}>
            <FontAwesomeIcon icon={faTrash} />
        </button>
    );
}

export default DeleteButtonOfCategory;