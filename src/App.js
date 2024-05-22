import './App.css';
import ListTabs from './components/ListTabs/ListTabs';
import { useTranslation } from 'react-i18next';
import ChangeLanguage from './components/changeLanguage/changeLanguage';


function App() {
  const { t } = useTranslation();

  return (
  <div>
    <header className="text-center style font-serif text-2xl text-white">{t('Title')}</header>
    <div className="App bg-slate-400 mt-4">
      <ChangeLanguage></ChangeLanguage>
      <ListTabs></ListTabs>
    </div>
  </div>
  );
}

export default App;