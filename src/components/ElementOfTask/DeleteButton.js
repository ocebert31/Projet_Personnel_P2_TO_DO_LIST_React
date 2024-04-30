import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function DeleteButton({ onClick }) {
    return (
        <button onClick={onClick} className="text-red-700 hover:text-red-900">
            <FontAwesomeIcon icon={faTrash} />
        </button>
    );
}

export default DeleteButton;