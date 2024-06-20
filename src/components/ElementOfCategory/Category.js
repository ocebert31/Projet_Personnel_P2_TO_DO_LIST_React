import DeleteButtonOfCategory from './Delete/DeleteButton';
import EditCategory from './Edit/EditCategory';
import Tasks from '../ListTasks/Tasks';

function Category({ editCategory, deleteCategory, startEditing, cancelEditing, darkMode, category, hex, tab, updateTabs, updateTabTasks}) {
    const handleDeleteClick = () => {
        deleteCategory(category.id);
    };

    return (
        <div>
            <div className='flex items-start'>
                <EditCategory category={category} editCategory={editCategory} startEditing={startEditing} cancelEditing={cancelEditing} darkMode={darkMode} hex={hex} tab={tab} updateTabs={updateTabs}/>
                <DeleteButtonOfCategory onClick={handleDeleteClick} category={category}/>
            </div>
            <Tasks darkMode={darkMode} tab={tab} updateTabTasks={updateTabTasks} categoryId={category.id}></Tasks>
        </div>
    )
 }

export default Category;

