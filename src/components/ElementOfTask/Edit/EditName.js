// EditButton.js
import React, { useState } from 'react';
import EditSaveButton from './EditSaveButton';
import SelectCategory from '../SelectCategory/selectCategory';

function EditButton({ task, editTask, startEditing, cancelEditing, checkedTask, darkMode, tab, updateTabTasks }) {
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

  const saveChangeColor = (category) => {
    const updatedTask = {...task, categoryId: category.id};
    const updatedTasks = tab.tasks.map(task => (task.id === updatedTask.id ? updatedTask : task));
    updateTabTasks(updatedTasks);
  }

  const categoryColor = () => {
    let categories = tab.categories || [];
    const selectedCategory = categories.find(category => category.id === task.categoryId);
    if(selectedCategory) {
      return selectedCategory.hex;
    }
  }

  return (
    <div className='flex justify-center items-center'>
      <SelectCategory tab={tab} saveChangeColor={saveChangeColor} categoryColor={categoryColor}/>
      <input type='checkbox' className='mr-1' checked={isChecked} onChange={onClickChecked} />
      {task.isEditing ? (
        <input type="text" value={editedContent} onChange={handleChange} className={`mr-2 ${darkMode ? 'text-white bg-slate-600' : 'text-black bg-colorInput'}`} />
      ) : (
        <div className='mr-1'>
          <label className={`break-all ${darkMode ? 'text-white' : 'text-black'} ${isChecked ? 'line-through' : ''}`} style={{ color: categoryColor() }}>{task.name}</label>
        </div>
      )}
      <EditSaveButton task={task} startEditing={startEditing} saveChange={saveChange} cancelEditing={cancelEditing} />
    </div>
  );
}

export default EditButton;
