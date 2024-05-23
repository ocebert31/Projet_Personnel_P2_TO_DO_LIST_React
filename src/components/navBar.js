import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import ChangeLanguage from './changeLanguage/changeLanguage';
import DarkMode from './DarkMode/DarkMode';
import ListTabs from './ListTabs/ListTabs';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
        <div>
            {isOpen && (
            <div>
                <div className="fixed left-0 flex flex-col items-center  h-screen h-full overflow-hidden text-gray-400 rounded border-b w-40 bg-slate-800">
                <button className="w-full px-3 mt-3 flex items-center justify-end" onClick={toggleSidebar}>
                    <FontAwesomeIcon icon={faTimes} className="w-8 h-8 fill-current" />
                </button>
                <ChangeLanguage />
                <DarkMode />
                </div>
            </div>
            )}
        </div>
        <div>
            <FontAwesomeIcon icon={faBars} onClick={toggleSidebar} className={`p-4 cursor-pointer text-white ${isOpen ? 'invisible' : ''}`} />
        </div>
      <ListTabs />
    </div>
  );
}

export default Sidebar;
