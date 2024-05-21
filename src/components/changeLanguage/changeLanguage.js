import { useTranslation } from 'react-i18next';

function ChangeLanguage () {
    const { i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };
    return(
        <div>
            <button className='text-white' onClick={() => changeLanguage('en')}>English</button>
            <button className='text-white' onClick={() => changeLanguage('fr')}>Francais</button>
        </div>
    )
}

export default ChangeLanguage;