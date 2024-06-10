import React, { useState } from 'react';
import EditSaveButton from './EditSaveButton';
import './EditCategory.css';

function EditCategory({ darkMode, editCategory, startEditing, cancelEditing, category}) {
  const [editedContent, setEditedContent] = useState(category.name);

  const handleChange = (e) => {
    setEditedContent(e.target.value);
  };

  const saveChange = () => {
    editCategory(category.id, editedContent)
  };

  return (
    <div className='flex'>
      {category.isEditing ? (
        <input type="text" value={editedContent} onChange={handleChange} className={` mr-2 ${darkMode ? 'text-white bg-slate-600' : 'text-black bg-colorInput'}`}/>
      ) : (
        <div className='mr-1 grid-cols-2' >
          <div className={`break-all text-l font-medium category-single-line  ${darkMode ? 'text-white' : 'text-black'}`} style={{ maxWidth: '200px' }}>{category.name}</div>
        </div>
      )}
      <EditSaveButton category={category} startEditing={startEditing} saveChange={saveChange} cancelEditing={cancelEditing}/>
    </div>
  );
}

export default EditCategory;
