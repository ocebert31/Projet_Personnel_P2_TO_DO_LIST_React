import React, { useState, useEffect } from 'react';
import DeleteTabs from '../ElementOfTab/Delete/DeleteButton';
import { useTranslation } from 'react-i18next';
import "./Tabs.css";
import Tab from './Tab';
import Add from '../ElementOfTab/Add/Add';

function ListTabs({ darkMode }) {
    const [tabs, setTabs] = useState([{ id: 1, name: 'Liste 1', isActive: true, tasks: [], categories: []}]);

    useEffect(() => {
        const savedTabsList = localStorage.getItem('tabs');
        if (savedTabsList)
            setTabs(JSON.parse(savedTabsList));
    }, []);

    useEffect(() => {
        if (tabs.length === 1) {
            const firstTab = tabs[0];
            if (firstTab.isActive === false) {
                const updatedTabs = tabs.map(tab => {
                    if (tab.id === firstTab.id) {
                        return { ...tab, isActive: true};
                    }
                    return { ...tab, isActive: false};
                });
                setTabs(updatedTabs);
                localStorage.setItem('tabs', JSON.stringify(updatedTabs));
            }
        }
    }, [tabs]);

    const addTabs = () => {
        const maxId = tabs.reduce((max, tab) => (tab.id > max ? tab.id : max), 0);
        const newTabName = `Liste ${maxId + 1}`;
        const newTab = { id: maxId + 1, name: newTabName, isActive: false, tasks: [], categories: []};
        const tabsList = [...tabs, newTab];
        setTabs(tabsList);
        localStorage.setItem('tabs', JSON.stringify(tabsList));
    }    

     const deleteTabs = (tabId) => {
        const updatedTabs = tabs.filter(tab => tab.id !== tabId);
        if (updatedTabs.length > 0) {
            const activeTabIndex = tabs.findIndex(tab => tab.id === tabId);
            if (tabs[activeTabIndex].isActive) {
                const nextActiveTabIndex = activeTabIndex === updatedTabs.length ? updatedTabs.length - 1 : activeTabIndex;
                updatedTabs[nextActiveTabIndex].isActive = true;
            }
        }
        setTabs(updatedTabs);
        localStorage.setItem('tabs', JSON.stringify(updatedTabs));
    }

    const changeActiveTab = (tabId) => {
        const updatedTabs = tabs.map(tab => {
            if (tab.id === tabId) {
                return { ...tab, isActive: true};
            }
            return { ...tab, isActive: false};
        })
        setTabs(updatedTabs);
        console.log('cc')
        localStorage.setItem('tabs', JSON.stringify(updatedTabs));
    }

    const updateTabs = (updatedTab) => {
        const updatedTabs = tabs.map(tab => {
            if (tab.id === updatedTab.id) {
                return updatedTab;
            }
            return tab;
        })
        setTabs(updatedTabs);
        localStorage.setItem('tabs', JSON.stringify(updatedTabs));
    }

    const { t } = useTranslation();

    return (
        <div className={`h-screen height ${darkMode ? ' dark' : 'bg-neutral-300'}`}>     
            <h1 className={`text-center style font-serif text-2xl py-5 px-2 font-medium max-[500px]:text-lg ${darkMode ? ' text-white' : 'text-black'}`}>{t('Title')}</h1>
            <div className="box justify-center p-4 overflow-y-scroll max-h-[150px] ">
                {tabs.map((tab, index) => (
                    <div key={index} className="flex items-center">
                        <button className={`btn-single-line ${darkMode ? ' text-white' : 'text-black'} ${tab.isActive ? 'underline' : ''}`} onClick={() => changeActiveTab(tab.id)}>
                            {tab.name}
                        </button>  
                        <DeleteTabs onClick={deleteTabs} tabId={tab.id} tabs={tabs}/>
                    </div>
                ))}
            <Add darkMode={darkMode} addTabs={addTabs}></Add>
            </div>
            <div>
                {tabs.map((tab) => (
                    <Tab darkMode={darkMode} tab={tab} updateTabs={updateTabs}></Tab>
                ))}
            </div>
            
        </div>
    );
}

export default ListTabs;







