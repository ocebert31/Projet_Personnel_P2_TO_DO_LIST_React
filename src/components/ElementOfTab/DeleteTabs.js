import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function DeleteTabs({onClick, tabId, tabs}) {
    return (
        <button onClick={() => onClick(tabId)}  className={`ml-2 opacity-0 text-white hover:opacity-100 ${tabs.length === 1 ? 'hidden' : ''}`}>
            <FontAwesomeIcon icon={faXmark} />
        </button>
    )
}

export default DeleteTabs;