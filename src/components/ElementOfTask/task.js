import DeleteButton from './Delete/DeleteButton';
import EditName from './Edit/EditName';

function Task({ task, editTask, deleteTask, startEditing, cancelEditing, checkedTask, darkMode}) {
    const handleDeleteClick = () => {
         deleteTask(task.id);
    };

    return (
        <div className='flex'>
            <EditName task={task} editTask={editTask} startEditing={startEditing} cancelEditing={cancelEditing} checkedTask={checkedTask} darkMode={darkMode}/>
            <DeleteButton task={task} onClick={handleDeleteClick}/>
        </div>
    )
 }

export default Task