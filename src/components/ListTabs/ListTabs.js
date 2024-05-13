import React, { useState, useEffect } from 'react';
import DeleteTabs from '../ElementOfTabs/DeleteTabs';
import EditTabs from '../ElementOfTabs/EditTabs';

function ListTabs() {
    const [tabs, setTabs] = useState([{ id: 1, name: 'List 1', isActive: true }]);

    useEffect(() => {
        const savedTabsList = localStorage.getItem('tabs');
        if (savedTabsList)
            setTabs(JSON.parse(savedTabsList));
    }, []);

    const addTabs = () => {
        const maxId = tabs.reduce((max, tab) => (tab.id > max ? tab.id : max), 0);
        const newTabName = `List ${maxId + 1}`;
        const newTab = { id: maxId + 1, name: newTabName };
        const tabsList = [...tabs, newTab];
        setTabs(tabsList);
        localStorage.setItem('tabs', JSON.stringify(tabsList));
    }    

    const deleteTabs = (tabId) => {
        const updatedTabs = tabs.filter(tab => tab.id !== tabId);
        setTabs(updatedTabs);
        localStorage.setItem('tabs', JSON.stringify(updatedTabs));
    }

    const editTab = (tabId, newName) => {
        const updatedTabs = tabs.map(tab => {
            if (tab.id === tabId) {
                return { ...tab, name: newName, isEditing: false };
            }
            return tab;
        });
        setTabs(updatedTabs);
        localStorage.setItem('tabs', JSON.stringify(updatedTabs));
    };

    const startEditing = (tabId) => {
        const updatedTab = tabs.map(tab => {
            if (tab.id === tabId) {
                return { ...tab, isEditing: true };
            }
            return  { ...tab, isEditing: false };
        });
        setTabs(updatedTab);
        localStorage.setItem('tabs', JSON.stringify(updatedTab));
    }

    const cancelEditing = () => {
        const updatedTab = tabs.map(tab => {
            return  { ...tab, isEditing: false };
        });
        setTabs(updatedTab);
        localStorage.setItem('tabs', JSON.stringify(updatedTab));
    }

    const changeActiveTab = (tabId) => {
        const updatedTabs = tabs.map(tab => {
            if (tab.id === tabId) {
                return { ...tab, isActive: true};
            }
            return { ...tab, isActive: false};
        })
        setTabs(updatedTabs);
        localStorage.setItem('tabs', JSON.stringify(updatedTabs));
    }

    return (
        <div>
            <div className="flex space-x-4 justify-center">
            {tabs.map((tab, index) => (
                <div key={index} className="flex items-center">
                    <button className={`${tab.isActive ? 'underline' : ''}`} onClick={() => changeActiveTab(tab.id)}>
                        {tab.name}
                    </button>  
                    <DeleteTabs onClick={deleteTabs} tabId={tab.id} />
                </div>
            ))}
            <button onClick={addTabs} className="border border-gray-300 px-4 py-2 rounded">+</button>
            </div>
            <div>
                {tabs.map((tab) => (
                    <div className={`${tab.isActive ? '' : 'hidden'}`}>
                        <EditTabs tab={tab} editTab={editTab} startEditing={startEditing} cancelEditing={cancelEditing}></EditTabs>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ListTabs;