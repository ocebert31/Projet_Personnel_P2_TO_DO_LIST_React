import React, { useState } from 'react';
import EditSaveButton from './EditSaveButton';
import './EditName.css';

function EditButton({ task, editTask, startEditing, cancelEditing }) {
  const [editedContent, setEditedContent] = useState(task.name);

  const handleChange = (e) => {
    setEditedContent(e.target.value);
  };

  const saveChange = () => {
    editTask(task.id, editedContent)
  }

  return (
    <div className='edit'>
      {task.isEditing ? (
        <input type="text" value={editedContent} onChange={handleChange} />
      ) : (
        <label>{task.name}</label>
      )}
      <EditSaveButton task={task} startEditing={startEditing} saveChange={saveChange} cancelEditing={cancelEditing} />
    </div>
  );
}

export default EditButton;
