import './App.css';
import ListTabs from './components/ListTabs/ListTabs';

function App() {
  return (
    <div className="App bg-slate-400 mt-4">
      <h1 className="text-center mb-4 font-serif text-2xl text-white">Liste de tâches créait avec React et Tailwind par Bertrand Océane</h1>
      <ListTabs></ListTabs>
    </div>
  );
}

export default App;