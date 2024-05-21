import './App.css';
import ListTabs from './components/ListTabs/ListTabs';
import { useTranslation } from 'react-i18next';
import ChangeLanguage from './components/changeLanguage/changeLanguage';

function App() {
  const { t } = useTranslation();

  return (
    <div className="App bg-slate-400 mt-4">
      <h1 className="text-center mb-4 font-serif text-2xl text-white">{t('Title')}</h1>
      <ChangeLanguage></ChangeLanguage>
      <ListTabs></ListTabs>
    </div>
  );
}

export default App;