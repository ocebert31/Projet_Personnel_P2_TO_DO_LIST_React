import React from 'react';
import DeleteTabs from '../ElementOfTabs/DeleteTabs';

function Tabs({ tab, deleteTabs }) {
    const handleDeleteClick = () => {
        deleteTabs(tab.id);
    };

    return (
        <div>
            <div className="border border-gray-300 px-4 py-2 rounded">{tab.name}</div>
            <DeleteTabs onClick={handleDeleteClick}></DeleteTabs>
        </div>
    );
}

export default Tabs;
