import './DarkMode.css';

export default function DarkModeToggle({ darkMode, toggleDarkMode }) {
  return (
    <div className="dark-mode-toggle-container flex items-center justify-center pt-4">
      <span style={{ color: darkMode ? 'grey' : 'yellow' }}>☀︎</span>
      <label className="switch">
        <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
        <span className="slider round"></span>
      </label>
      <span style={{ color: darkMode ? '#c96dfd' : 'grey' }}>☽</span>
    </div>
  );
}