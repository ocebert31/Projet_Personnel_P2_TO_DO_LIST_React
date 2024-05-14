import './App.css';
import ListTabs from './components/ListTabs/ListTabs';

function App() {
  return (
    <div className="App bg-backgroundColor min-h-screen">
      <h1 className="text-center mb-4 text-3xl font-serif">To Do List with React and Tailwind</h1>
      <ListTabs></ListTabs>
    </div>
  );
}

export default App;