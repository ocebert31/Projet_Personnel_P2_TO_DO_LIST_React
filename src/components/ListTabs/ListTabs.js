import React, { useState, useEffect } from 'react';
import Tabs from '../Tabs/Tabs';

function ListTabs() {
    const [tabs, setTabs] = useState([{ id: 1, name: 'List 1' }]);

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

    const checkedTask = (tabId) => {
        const editedTab = tabs.map(tab => {
            if (tab.id === tabId) {
                return { ...tab, isChecked: !tab.isChecked };
            }
            return tab;
        });
        setTabs(editedTab);
        localStorage.setItem('tabs', JSON.stringify(editedTab));
    }

    return (
        <div className="flex space-x-4">
            {tabs.map((tab, index) => (
                <li key={index} className='list-none'>
                    <Tabs tab={tab} deleteTabs={deleteTabs} editTab={editTab} startEditing={startEditing} cancelEditing={cancelEditing} checkedTask={checkedTask}></Tabs>
                </li>  
            ))}
            <button onClick={addTabs} className="border border-gray-300 px-4 py-2 rounded">+</button>
        </div>
    );
}

export default ListTabs;