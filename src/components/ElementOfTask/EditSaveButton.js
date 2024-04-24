import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


function EditSaveButton({ task, startEditing, saveChange, cancelEditing }) {
    const onClickCheck = () => {
        saveChange();
    };

    const onClickEdit = () => {
        startEditing(task.id);
    };

    const onClickCancel = () => {
        cancelEditing()
    }

    return (
        <div>
            {task.isEditing ? 
                <div>
                    <button onClick={onClickCheck}>
                        <FontAwesomeIcon icon={faCheck} />
                    </button>
                    <button onClick={onClickCancel}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
                :
                <button onClick={onClickEdit}>
                    <FontAwesomeIcon icon={faPen} />
                </button>
            }
        </div>
    );
}

export default EditSaveButton;

