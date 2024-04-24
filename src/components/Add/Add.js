import React, { useState } from 'react';

function Add({ addTask }) {
    const [name, setName] = useState('');

    const saveName = (event) => {
        setName(event.target.value);
    };

    const handleChange = () => {
        const newName = name.trim();
        if (newName !== '') {
            const newTask = { name: newName, id: generateUID(), isEditing: false };
            addTask(newTask);
            setName('');
        }
    };

    const generateUID = () => {
        return '_' + Math.random().toString(36).substr(2, 9);
    };

    return (
        <div>
            <input value={name} onChange={saveName} />
            <button onClick={handleChange}>Valider</button>
        </div>
    );
}

export default Add;
