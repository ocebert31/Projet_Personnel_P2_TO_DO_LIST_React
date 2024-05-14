import React, { useState, useEffect } from 'react';
import EditSaveButtonOfTab from './EditSaveButtonOfTab';

function EditTab({ tab, updateTabs }) {
  const [editedContent, setEditedContent] = useState(tab.name);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setEditedContent(tab.name);
  }, [tab.name]);

  const handleChange = (e) => {
    setEditedContent(e.target.value);
  };

  const saveChange = () => {
    const updatedTab = { ...tab, name: editedContent };
    updateTabs(updatedTab);
    setIsEditing(false)
  };

  const startEditing = () => {
    setIsEditing(true)
  }

  const cancelEditing = () => {
    setIsEditing(false)
  }

  return (
    <div className='flex'>
      {isEditing ? (
        <input type="text" value={editedContent} onChange={handleChange} className='bg-backgroundColor mr-2'/>
      ) : (
        <div className='mr-1'>
          <h2 className='break-all text-2xl font-medium'>{tab.name}</h2>
        </div>
      )}
      <EditSaveButtonOfTab tab={tab} isEditing={isEditing} startEditing={startEditing} saveChange={saveChange} cancelEditing={cancelEditing} />
    </div>
  );
}

export default EditTab;
