import './App.css';
import ListTabs from './components/ListTabs/ListTabs';
import { useTranslation } from 'react-i18next';
import ChangeLanguage from './components/changeLanguage/changeLanguage';
import DarkMode from './components/DarkMode/DarkMode';

function App() {
  const { t } = useTranslation();

  return (
  <div>
    <div className='flex justify-center items-center'>
      <header className= 'text-center style font-serif text-2xl text-white'>{t('Title')}</header>
      <DarkMode></DarkMode>
    </div>
    <div className="App mt-4">
      <ChangeLanguage></ChangeLanguage>
      <ListTabs></ListTabs>
    </div>
  </div>
  );
}

export default App;