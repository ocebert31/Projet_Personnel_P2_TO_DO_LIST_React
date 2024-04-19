import React, { useState } from 'react';
import EditSaveButton from './EditSaveButton';

function EditButton({ task, editTask }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedContent, setEditedContent] = useState(task.name);

    const handleEdit = () => {
        if (isEditing) {
            console.log(editedContent)
            editTask(task.id, editedContent);
        }
        setIsEditing(!isEditing);
    };

    const handleChange = (e) => {
        setEditedContent(e.target.value);
    };

    return (
        <div>
            {isEditing ? (
                <input type="text" value={editedContent} onChange={handleChange} />
            ) : (
                <span>{task.name}</span>
            )}
            <EditSaveButton isEditing={isEditing} onClick={handleEdit} />
        </div>
    );
}

export default EditButton;


// import React, { useState } from 'react';
// import EditSaveButton from './EditSaveButton'; // Importer le composant EditSaveButton

// function EditButton({ task, editTask }) {
//     const [isEditing, setIsEditing] = useState(false);
//     const [editedContent, setEditedContent] = useState(task.name);

//     const handleEdit = () => {
//         if (isEditing) {
//             editTask(task.id, editedContent);
//         }
//         setIsEditing(!isEditing);
//     };

//     const handleChange = (e) => {
//         setEditedContent(e.target.value);
//     };

//     return (
//         <div>
//             {isEditing ? (
//                 <input type="text" value={editedContent} onChange={handleChange} />
//             ) : (
//                 <span>{task.name}</span>
//             )}
//             <EditSaveButton isEditing={isEditing} onClick={handleEdit} /> {/* Utiliser le composant EditSaveButton */}
//         </div>
//     );
// }

// export default EditButton;