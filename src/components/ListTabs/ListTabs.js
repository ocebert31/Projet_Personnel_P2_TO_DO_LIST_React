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
        const newTabName = `List ${tabs.length + 1}`;
        const newTab = { id: tabs.length + 1, name: newTabName };
        const tabsList = [...tabs, newTab];
        setTabs(tabsList);
        localStorage.setItem('tabs', JSON.stringify(tabsList));
    }

    const deleteTabs = (tabId) => {
        const updatedTabs = tabs.filter(tab => tab.id !== tabId);
        setTabs(updatedTabs);
        localStorage.setItem('tabs', JSON.stringify(updatedTabs));
    }

    return (
        <div className="flex space-x-4">
            {tabs.map((tab, index) => (
                <div key={index}>
                    <Tabs tab={tab} deleteTabs={deleteTabs}></Tabs>
                </div>  
            ))}
            <button onClick={addTabs} className="border border-gray-300 px-4 py-2 rounded">+</button>
        </div>
    );
}

export default ListTabs;