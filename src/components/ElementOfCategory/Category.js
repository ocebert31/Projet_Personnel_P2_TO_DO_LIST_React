import DeleteButtonOfCategory from './Delete/DeleteButton';
import EditCategory from './Edit/EditCategory';

function Category({ editCategory, deleteCategory, startEditing, cancelEditing, darkMode, category}) {
    const handleDeleteClick = () => {
        deleteCategory(category.id);
    };

    return (
        <div className='flex items-start'>
            <EditCategory category={category} editCategory={editCategory} startEditing={startEditing} cancelEditing={cancelEditing} darkMode={darkMode}/>
            <DeleteButtonOfCategory onClick={handleDeleteClick} category={category}/>
        </div>
    )
 }

export default Category;

