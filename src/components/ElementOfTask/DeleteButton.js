import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function DeleteButton({ task, onClick }) {
    // Vérifier si l'élément est en cours d'édition
    const isEditing = task.isEditing || false;

    // Gérer le clic uniquement si l'élément n'est pas en cours d'édition
    const handleClick = () => {
        if (!isEditing) {
            onClick();
        }
    };

    return (
        <button onClick={handleClick} className={`text-red-700 ${!isEditing ? 'opacity-0 hover:opacity-100' : ''}`}  disabled={isEditing}>
            <FontAwesomeIcon icon={faTrash} />
        </button>
    );
}

export default DeleteButton;
