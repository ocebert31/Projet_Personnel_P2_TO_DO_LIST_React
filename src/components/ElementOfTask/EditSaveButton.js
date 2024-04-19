import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function EditSaveButton({ isEditing, onClick }) {
    return (
        <button onClick={onClick}>
            {isEditing ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faPen} />}
        </button>
    );
}

export default EditSaveButton;
