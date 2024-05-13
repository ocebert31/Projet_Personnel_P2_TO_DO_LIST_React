import React from 'react';
import DeleteTabs from '../ElementOfTabs/DeleteTabs';
import EditTabs from '../ElementOfTabs/EditTabs';

function Tabs({ tab, deleteTabs, editTab, startEditing, cancelEditing, checkedTab}) {
    const handleDeleteClick = () => {
        deleteTabs(tab.id);
    };

    return (
        <div className='flex'>
            <EditTabs tab={tab} editTab={editTab} startEditing={startEditing} cancelEditing={cancelEditing} checkedTab={checkedTab}></EditTabs>
            <DeleteTabs onClick={handleDeleteClick}></DeleteTabs>
        </div>
    );
}

export default Tabs;
