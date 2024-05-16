import './App.css';
import ListTabs from './components/ListTabs/ListTabs';

function App() {
  return (
    <div className="App bg-backgroundColor">
      <h1 className="text-center mb-4 font-serif text-2xl">To Do List with React and Tailwind</h1>
      <ListTabs></ListTabs>
    </div>
  );
}

export default App;