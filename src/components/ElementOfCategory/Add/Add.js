// import { useTranslation } from 'react-i18next';

function Add({ darkMode, addCategories }) {
    // const { t } = useTranslation();  

    return (
        <div className="pt-6">
            <button onClick={addCategories} className={`border px-2 rounded ${darkMode ? 'text-white border-white' : 'text-black border-black'}`}>Ajouter une catégorie +</button>
        </div>
    );
}

export default Add;