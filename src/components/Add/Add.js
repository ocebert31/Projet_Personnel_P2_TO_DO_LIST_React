import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Add({ addTask }) {
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

    return (
        <div className="flex items-center mt-4">
            <input className="border border-gray-300 rounded-l-lg px-4 py-2 mr-0 w-64" value={name} onChange={saveName} placeholder={t('ExampleAddition')}/>
            <button onClick={handleChange} className="px-4 py-2 bg-inputButton text-white rounded-r-lg hover:bg-black">
                {t('AddTask')}
            </button>
        </div>
    );
}

export default Add;