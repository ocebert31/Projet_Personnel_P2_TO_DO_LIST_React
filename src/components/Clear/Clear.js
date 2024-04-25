import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';
import './Clear.css';

function Clear({ clearAllTasks }) {
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
            <button onClick={handleClearTasks}>
                <FontAwesomeIcon icon={faRotateRight} />
                Tout supprimer
            </button>
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h2>Confirmation</h2>
                        <p>Êtes-vous sûr de vouloir supprimer toutes les tâches ?</p>
                        <div>
                            <button onClick={confirmClearTasks}>Oui</button>
                            <button onClick={closeModal}>Non</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Clear;
