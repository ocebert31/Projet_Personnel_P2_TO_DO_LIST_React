import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

function Clear({ clearAllTasks, darkMode }) {
    const { t } = useTranslation();
    const [showModal, setShowModal] = useState(false);

    const handleClearTasks = () => {
        setShowModal(true);
    };

    const confirmClearTasks = () => {
        clearAllTasks();
        setShowModal(false);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <button onClick={handleClearTasks} className={`${darkMode ? 'text-white' : 'text-black'}`}>
                <FontAwesomeIcon icon={faRotateRight} className="mr-2"/>
                {t('DeleteButton')}
            </button>
            {showModal && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
                    <div className={` p-8 rounded shadow-lg max-[475px]:m-4 ${darkMode ? 'bg-gray-600 border-1 border-white' : 'bg-foregroundColor'}`}>
                        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>Confirmation</h2>
                        <p className={`mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>{t('ConfirmQuestion')}</p>
                        <div className="flex justify-between">
                            <button onClick={confirmClearTasks} className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-900">{t('ConfirmButton')}</button>
                            <button onClick={closeModal} className="px-4 py-2 bg-red-700 text-white rounded hover:bg-red-900">{t('ConfirmCancel')}</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Clear;
