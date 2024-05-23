import React, { useEffect, useState } from 'react';
import './DarkMode.css';

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? '#123' : '#ffffff';
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="dark-mode-toggle-container flex items-center justify-center">
      <span style={{ color: darkMode ? 'grey' : 'yellow' }}>☀︎</span>
      <label className="switch">
        <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
        <span className="slider round"></span>
      </label>
      <span style={{ color: darkMode ? '#c96dfd' : 'grey' }}>☽</span>
    </div>
  );
}
