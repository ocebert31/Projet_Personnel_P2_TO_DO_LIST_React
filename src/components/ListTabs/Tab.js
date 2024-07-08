import React from 'react';
import "./Tab.css";
import Categories from '../ListCategories/Categories';
import Tasks from '../ListTasks/Tasks';
import EditTab from '../ElementOfTab/Edit/EditTab';
import ClearTasks from '../ElementOfTask/Clear/Clear';
import { useTranslation } from 'react-i18next';
import AddTask from '../ElementOfTask/Add/Add';

function Tab({ darkMode, tab, updateTabs }) {
    const { t } = useTranslation();

    const checkedCount = () => {
        return tab.tasks.filter(task => task.isChecked).length;
    }

    const addTask = (newTask) => {
        const taskList = [...tab.tasks, newTask];
        updateTabTasks(taskList);
    };
    
    const updateTabTasks = (updatedTasks) => {
        const updatedTab = { ...tab, tasks: updatedTasks };
        updateTabs(updatedTab);
    };

    return (
        <div className={`${tab.isActive ? '' : 'hidden'}`}>
            <div className=" flex justify-center items-center p-4">
                <div className="w-full md:w-4/6">
                    <div className={`w-full p-6 overflow-y-scroll max-h-[900px] border-2 ${darkMode ? 'bg-gray-800 border-white' : 'bg-neutral-400 border-black'} ${checkedCount() > 4 ? 'glowing-effect' : ''}`}>
                        <EditTab tab={tab} updateTabs={updateTabs} darkMode={darkMode}></EditTab>
                        <div className='flex pt-4'>
                            <ClearTasks darkMode={darkMode} tab={tab} updateTabs={updateTabs}/>
                        </div>
                        <Categories darkMode={darkMode} tab={tab} updateTabs={updateTabs} updateTabTasks={updateTabTasks}></Categories>
                        <Tasks addTask={addTask} darkMode={darkMode} tab={tab} updateTabTasks={updateTabTasks} categoryId={null} updateTabs={updateTabs}></Tasks>
                        <p className={` ${darkMode ? 'text-white' : 'text-black'} ${checkedCount() === 0 ? 'hidden' : ''}`}>{t('SentenceOfNumberChecked', { count: checkedCount() })}</p>
                        <AddTask addTask={addTask} darkMode={darkMode}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tab;