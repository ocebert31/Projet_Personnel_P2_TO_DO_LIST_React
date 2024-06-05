import React, { useState, useEffect } from 'react';
import EditSaveButtonOfCategory from './EditSaveButton';

function EditCategory({ category, darkMode, updateCategories }) {
  const [editedContent, setEditedContent] = useState(category.name);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setEditedContent(category.name);
  }, [category.name]);

  const handleChange = (e) => {
    setEditedContent(e.target.value);
  };

  const saveChange = () => {
    const updatedTab = { ...category, name: editedContent };
    updateCategories(updatedTab);
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
          <div className={`break-all text-2xl font-medium ${darkMode ? 'text-white' : 'text-black'}`}>{category.name}</div>
        </div>
      )}
      <EditSaveButtonOfCategory category={category} isEditing={isEditing} startEditing={startEditing} saveChange={saveChange} cancelEditing={cancelEditing} />
    </div>
  );
}

export default EditCategory;
