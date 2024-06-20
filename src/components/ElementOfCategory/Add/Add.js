import { useTranslation } from 'react-i18next';

function Add({ darkMode, addCategories }) {
    const { t } = useTranslation();  

    return (
        <div className="pb-4 pt-2">
            <button onClick={addCategories} className={`border px-2 rounded ${darkMode ? 'text-white border-white' : 'text-black border-black'}`}>{t('AddCategory')}</button>
        </div>
    );
}

export default Add;