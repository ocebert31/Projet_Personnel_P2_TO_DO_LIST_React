import Add from '../ElementOfCategory/Add/Add';
import React, { useState, useEffect } from 'react';
import Category from '../ElementOfCategory/Category';

function Categories({ darkMode, tab, updateTabs, updateTabTasks}) {
    const [categories, setCategories] = useState(tab.categories || []);

    useEffect(() => {
        setCategories(tab.categories || []);
    }, [tab.categories]);

    const updateTabCategories = (updatedCategories) => {
        const updatedTab = { ...tab, categories: updatedCategories };
        updateTabs(updatedTab);
        setCategories(updatedCategories);
    };

    const addCategories = () => {
        const maxId = categories.reduce((max, category) => (category.id > max ? category.id : max), 0);
        const newCategoryName = `Catégorie ${maxId + 1}`;
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        const newCategory = { id: maxId + 1, name: newCategoryName, isActive: false, isEditing: false, hex: randomColor};
        let categoriesList = [...categories, newCategory];
        updateTabCategories(categoriesList);
    };

    const deleteCategory = (categoryId) => {
        const updatedCategories = categories.filter(category => category.id !== categoryId);
        updateTabCategories(updatedCategories);
    };

    const editCategory = (categoryId, newName) => {
        const updatedCategories = categories.map(category => (category.id === categoryId ? { ...category, name: newName, isEditing: false } : category));
        updateTabCategories(updatedCategories);
    };

    const startEditing = (categoryId) => {
        const updatedCategories = categories.map(category => (category.id === categoryId ? { ...category, isEditing: true } : { ...category, isEditing: false }));
        updateTabCategories(updatedCategories);
    };

    const cancelEditing = () => {
        const updatedCategories = categories.map(category => ({ ...category, isEditing: false }));
        updateTabCategories(updatedCategories);
    };

    return (
        <div>
            <ul className={`justify-center p-4 overflow-y-scroll max-h-[250px] ${categories.length === 0 ? 'hidden' : ''}`}>
                {categories.map((category) => (
                    <li key={category.id} className="flex items-center pb-2">
                        <Category updateTabTasks={updateTabTasks} category={category} deleteCategory={deleteCategory} editCategory={editCategory} startEditing={startEditing} cancelEditing={cancelEditing} darkMode={darkMode} hex={category.hex} tab={tab} updateTabs={updateTabs}/>
                    </li>
                ))}
            </ul>
            <Add addCategories={addCategories} darkMode={darkMode}/>
        </div>
    )
}

export default Categories;

