import React, { useState } from 'react';

function Add({ addTask }) {
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
            <input className="border border-gray-300 rounded-l-lg px-4 py-2 mr-0 w-64" value={name} onChange={saveName} placeholder="Entrez une nouvelle tâche..."/>
            <button onClick={handleChange} className="px-4 py-2 bg-inputButton text-white rounded-r-lg hover:bg-black">
                Valider
            </button>
        </div>
    );
}

export default Add;