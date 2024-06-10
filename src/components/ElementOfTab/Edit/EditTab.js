import React, { useState, useEffect } from 'react';
import EditSaveButton from './EditSaveButton';

function EditTab({ tab, updateTabs, darkMode }) {
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
    setIsEditing(false);
  };

  const startEditing = () => {
    setIsEditing(true);
  }

  const cancelEditing = () => {
    setIsEditing(false);
  }

  return (
    <div className='flex'>
      {isEditing ? (
        <input type="text" value={editedContent} onChange={handleChange} className={` mr-2 ${darkMode ? 'text-white bg-slate-600' : 'text-black bg-colorInput'}`}/>
      ) : (
        <div className='mr-1'>
          <h2 className={`break-all text-2xl font-medium ${darkMode ? 'text-white' : 'text-black'}`}>{tab.name}</h2>
        </div>
      )}
      <EditSaveButton tab={tab} isEditing={isEditing} startEditing={startEditing} saveChange={saveChange} cancelEditing={cancelEditing} />
    </div>
  );
}

export default EditTab;
