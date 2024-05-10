import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function DeleteTabs({onClick}) {
    return (
        <button onClick={onClick}>
            <FontAwesomeIcon icon={faTrash} />
        </button>
    )
}

export default DeleteTabs;