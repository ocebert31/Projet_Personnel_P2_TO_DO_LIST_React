import DeleteButton from './Delete/DeleteButton';
import EditName from './Edit/EditName';

function Task({ task, editTask, deleteTask, startEditing, cancelEditing, checkedTask, darkMode, tab, updateTabs, updateTabTasks}) {
    const handleDeleteClick = () => {
        deleteTask(task.id);
    };

    return (
        <div className='flex'>
            <EditName updateTabTasks={updateTabTasks} updateTabs={updateTabs} task={task} editTask={editTask} startEditing={startEditing} cancelEditing={cancelEditing} checkedTask={checkedTask} darkMode={darkMode} tab={tab}/>
            <DeleteButton task={task} onClick={handleDeleteClick}/>
        </div>
    )
 }

export default Task