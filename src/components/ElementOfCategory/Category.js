import DeleteButtonOfCategory from './Delete/DeleteButton';
import EditCategory from './Edit/EditCategory';

function Category({ editCategory, deleteCategory, startEditing, cancelEditing, darkMode, category, updateCategories}) {
    const handleDeleteClick = () => {
        deleteCategory(category.id);
    };

    return (
        <div className='flex'>
            <EditCategory updateCategories={updateCategories} category={category} editCategory={editCategory} startEditing={startEditing} cancelEditing={cancelEditing} darkMode={darkMode}/>
            <DeleteButtonOfCategory onClick={handleDeleteClick} category={category}/>
        </div>
    )
 }

export default Category;

