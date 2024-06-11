import React, { useState } from 'react';
import EditSaveButton from './EditSaveButton';
import './EditCategory.css';

function EditCategory({ darkMode, editCategory, startEditing, cancelEditing, category, hex}) {
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
        <div className='flex mr-1 grid-cols-2 items-center justify-center' >
          <div className='flex' style={{ backgroundColor: hex, width: 15, height: 15}}></div>
          <div className={`break-all text-l font-medium category-single-line  ${darkMode ? 'text-white' : 'text-black'}`} style={{ maxWidth: '200px' }}>{category.name}</div>
        </div>
      )}
      <EditSaveButton category={category} startEditing={startEditing} saveChange={saveChange} cancelEditing={cancelEditing}/>
    </div>
  );
}

export default EditCategory;
