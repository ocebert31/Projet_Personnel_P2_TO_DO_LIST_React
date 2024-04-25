import React, { useState } from 'react';
import EditSaveButton from './EditSaveButton';
import './EditName.css';

function EditButton({ task, editTask, startEditing, cancelEditing, checkedTask }) {
  const [editedContent, setEditedContent] = useState(task.name);
  const [isChecked, setIsChecked] = useState(task.isChecked);

  const handleChange = (e) => {
    setEditedContent(e.target.value);
  };

  const saveChange = () => {
    editTask(task.id, editedContent);
  };

  const onClickChecked = () => {
    setIsChecked(!isChecked);
    checkedTask(task.id);
  };

  return (
    <div className='edit'>
      <input type='checkbox' checked={isChecked} onChange={onClickChecked}></input>
      {task.isEditing ? (
        <input type="text" value={editedContent} onChange={handleChange} />
      ) : (
        <div>
          <label className={isChecked ? 'checked' : ''}>{task.name}</label>
        </div>
      )}
      <EditSaveButton task={task} startEditing={startEditing} saveChange={saveChange} cancelEditing={cancelEditing} />
    </div>
  );
}

export default EditButton;
