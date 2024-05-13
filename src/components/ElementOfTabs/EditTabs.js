import React, { useState, useEffect } from 'react';
import EditSaveButtonOfTab from './EditSaveButtonOfTab';

function EditTabs({ tab, editTab, startEditing, cancelEditing }) {
  const [editedContent, setEditedContent] = useState(tab.name);

  useEffect(() => {
    setEditedContent(tab.name);
  }, [tab.name]);

  const handleChange = (e) => {
    setEditedContent(e.target.value);
  };

  const saveChange = () => {
    editTab(tab.id, editedContent);
    console.log('pouet');
  };

  return (
    <div className='flex'>
      {tab.isEditing ? (
        <input type="text" value={editedContent} onChange={handleChange} className='bg-backgroundColor mr-2'/>
      ) : (
        <div className='mr-1'>
          <h2 className='break-all text-2xl font-medium'>{tab.name}</h2>
        </div>
      )}
      <EditSaveButtonOfTab tab={tab} startEditing={startEditing} saveChange={saveChange} cancelEditing={cancelEditing} />
    </div>
  );
}

export default EditTabs;
