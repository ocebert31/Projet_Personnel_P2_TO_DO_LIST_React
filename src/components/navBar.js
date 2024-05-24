import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import ChangeLanguage from './changeLanguage/changeLanguage';
import DarkMode from './DarkMode/DarkMode';
import ListTabs from './ListTabs/ListTabs';

function Sidebar({ darkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
 
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ color: darkMode ? '#c96dfd' : 'grey' }}>
      <div>
        {isOpen && (
          <div className={`fixed left-0 flex flex-col items-center h-screen overflow-hidden rounded border-b w-40 ${darkMode ? 'bg-gray-800 text-white' : 'bg-neutral-400 text-black'}`}>
            <button className="w-full px-3 mt-3 flex items-center justify-end" onClick={toggleSidebar}>
              <FontAwesomeIcon icon={faTimes} className="w-8 h-8 fill-current" />
            </button>
            <ChangeLanguage darkMode={darkMode}/>
            <DarkMode darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          </div>
        )}
      </div>
      <div className={`${darkMode ? ' dark' : 'bg-neutral-300'}`}>
        <FontAwesomeIcon icon={faBars} onClick={toggleSidebar} className={`p-4 cursor-pointer ${darkMode ? 'text-white' : 'text-black'} ${isOpen ? 'invisible' : ''}`} />
      </div>
      <ListTabs darkMode={darkMode}/>
    </div>
  );
}

export default Sidebar;