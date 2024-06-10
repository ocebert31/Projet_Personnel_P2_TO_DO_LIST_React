function Add({ darkMode, addTabs }) {;  

    return (
        <button onClick={addTabs} className={`border px-2 rounded ${darkMode ? 'text-white border-white' : 'text-black border-black'}`}>+</button>
    );
}

export default Add;