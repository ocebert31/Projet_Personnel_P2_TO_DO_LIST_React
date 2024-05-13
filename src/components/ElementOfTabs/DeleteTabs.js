import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function DeleteTabs({onClick, tabId}) {
    return (
        <button onClick={() => onClick(tabId)} className="ml-2">
            <FontAwesomeIcon icon={faXmark} />
        </button>
    )
}

export default DeleteTabs;