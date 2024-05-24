import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Add({ addTask, darkMode }) {
    const { t } = useTranslation();
    const [name, setName] = useState('');

    const saveName = (event) => {
        setName(event.target.value);
    };

    const handleChange = () => {
        const newName = name.trim();
        if (newName !== '') {
            const newTask = { name: newName, id: generateUID(), isEditing: false, isChecked: false };
            addTask(newTask);
            setName('');
        }
    };

    const generateUID = () => {
        return '_' + Math.random().toString(36).substr(2, 9);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          handleChange()
        }
    };

    return (
        <div className="flex items-center mt-4">
            <input onKeyDown={handleKeyPress} className={`border-y-2 border-l-2 rounded-l-lg px-4 py-2 mr-0 w-64 ${darkMode ? 'text-white bg-slate-600 border-white' : 'text-black bg-colorInput border-black'}`} value={name} onChange={saveName} placeholder={t('ExampleAddition')}/>
            <button onClick={handleChange} className={`px-4 py-2 rounded-r-lg border-y-2 border-r-2 ${darkMode ? 'text-white bg-gray-900 border-white' : 'text-black bg-neutral-500 border-black'}`}>
                {t('AddTask')}
            </button>
        </div>
    );
}

export default Add;