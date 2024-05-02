import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function DeleteButton({ onClick, isEditing }) {
    return (
        <button onClick={onClick} className={isEditing ? '': 'text-red-700 opacity-0 hover:opacity-100'}>
            <FontAwesomeIcon icon={faTrash} />
        </button>
    );
}

export default DeleteButton;

// className="text-red-700 hover:text-red-900"




// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrash } from '@fortawesome/free-solid-svg-icons';
// import { useState } from 'react';

// function DeleteButton({ onClick, task, cancelEditing }) {
//     const [isEditing, setIsEditing] = useState(task.isEditing);

//     const onClickEditing = () => {
//         setIsEditing(!isEditing);
//         cancelEditing(task.id);
//     };

//     return (
//         <button onClick={onClick} isEditing={isEditing} className={isEditing ? 'text-red-300' : 'text-blue-300'} onChange={onClickEditing}>
//             <FontAwesomeIcon icon={faTrash} />
//         </button>
//     );
// }

// export default DeleteButton;