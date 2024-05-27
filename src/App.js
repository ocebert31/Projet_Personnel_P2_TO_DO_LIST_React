import React, { useState } from 'react';
import Sidebar from './components/NavBar/NavBar';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <Sidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
}

export default App;