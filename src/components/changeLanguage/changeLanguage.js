import React from 'react';
import { useTranslation } from 'react-i18next';
import franceFlag from './france-flag.svg';
import ukFlag from './uk-flag.png';

function ChangeLanguage({darkMode}) {
    const { i18n } = useTranslation();
    const currentLanguage = i18n.language;

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <div className="flex justify-center pt-4">
            <button className="text-white relative flex items-center justify-center w-12 h-12 rounded-full overflow-hidden border-2 border-transparent focus:outline-none focus:border-white" onClick={() => changeLanguage('en')}>
                <img src={ukFlag} alt="English" className={`w-8 h-8 ${currentLanguage === 'en' ? 'border-white' : 'border-transparent'}`} />
                {currentLanguage === 'en' && <div className={`absolute inset-0 border-2  rounded-full pointer-events-none ${darkMode ? 'border-white' : 'border-black'}`}></div>}
            </button>
            <button className="text-white relative flex items-center justify-center w-12 h-12 rounded-full overflow-hidden border-2 border-transparent focus:outline-none focus:border-white" onClick={() => changeLanguage('fr')}>
                <img src={franceFlag} alt="Français" className={`w-8 h-8 ${currentLanguage === 'fr' ? 'border-white' : 'border-transparent'}`} />
                {currentLanguage === 'fr' && <div className={`absolute inset-0 border-2  rounded-full pointer-events-none ${darkMode ? 'border-white' : 'border-black'}`}></div>}
            </button>
        </div>
    );
}

export default ChangeLanguage;
