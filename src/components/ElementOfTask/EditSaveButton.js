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
                <div className='max-[350px]:flex'>
                    <button onClick={onClickCheck} className='mr-2 text-green-700 hover:text-green-900'>
                        <FontAwesomeIcon icon={faCheck} />
                    </button>
                    <button onClick={onClickCancel} className='mr-2 text-red-700 hover:text-red-900'>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
                :
                // on ne peut pas changer la couleur au hover et mettre un opacity
                <button onClick={onClickEdit} className='mr-2 text-blue-700 opacity-0 hover:opacity-100'>
                    <FontAwesomeIcon icon={faPen} />
                </button>
            }
        </div>
    );
}

export default EditSaveButton;