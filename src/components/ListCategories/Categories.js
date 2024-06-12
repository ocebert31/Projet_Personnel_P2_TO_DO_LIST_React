import Add from '../ElementOfCategory/Add/Add';
import React, { useState, useEffect } from 'react';
import Category from '../ElementOfCategory/Category';
import './Categories.css'

function Categories({ darkMode }) {
    const [categories, setCategories] = useState([{ id: 1, name: 'Catégorie 1', isActive: true, isEditing: false, hex: '#ffffff' }]);

    useEffect(() => {
        const savedCatedgoriesList = localStorage.getItem('categories');
        if (savedCatedgoriesList)
            setCategories(JSON.parse(savedCatedgoriesList));
    }, []);

    console.log(categories)

    const addCategories = () => {
        const maxId = categories.reduce((max, category) => (category.id > max ? category.id : max), 0);
        const newCategoryName = `Catégorie ${maxId + 1}`;
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        const newCategory = { id: maxId + 1, name: newCategoryName, isActive: false, isEditing: false, hex: randomColor};
        let categoriesList = [...categories, newCategory];
        setCategories(categoriesList);
        localStorage.setItem('categories', JSON.stringify(categoriesList));   
    };

    const deleteCategory = (categoryId) => {
        const updatedCategories = categories.filter(category => category.id !== categoryId);
        setCategories(updatedCategories);
        localStorage.setItem('categories', JSON.stringify(updatedCategories));
    };

    const editCategory = (categoryId, newName) => {
        const updatedCategories = categories.map(category => (category.id === categoryId ? { ...category, name: newName, isEditing: false } : category));
        setCategories(updatedCategories);
        localStorage.setItem('categories', JSON.stringify(updatedCategories));
    };

    const startEditing = (categoryId) => {
        const updatedCategories = categories.map(category => (category.id === categoryId ? { ...category, isEditing: true } : { ...category, isEditing: false }));
        setCategories(updatedCategories);
        localStorage.setItem('categories', JSON.stringify(updatedCategories));
    };

    const cancelEditing = () => {
        const updatedCategories = categories.map(category => ({ ...category, isEditing: false }));
        setCategories(updatedCategories);
        localStorage.setItem('categories', JSON.stringify(updatedCategories));
    };

    return (
        <div>
            <ul className='custom-grid justify-center p-4 overflow-y-scroll max-h-[150px] '>
                {categories.map((category) => (
                    <li key={category.id} className="flex items-center">
                        <Category category={category} deleteCategory={deleteCategory} editCategory={editCategory} startEditing={startEditing} cancelEditing={cancelEditing} darkMode={darkMode} hex={category.hex}/>
                    </li>
                ))}
            </ul>
            <Add addCategories={addCategories} darkMode={darkMode}/>
        </div>
    )
}

export default Categories;

