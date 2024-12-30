// src/Components/Modal/Modal.jsx
import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, onAdd, children }) => {
    if (!isOpen) return null;

    return (
      <div className="modal-overlay">
        <div className="modal-content">
          {children}
        <div className="modal-buttons">
                <button className="add-button" onClick={onAdd}>Add Balance</button>
                <button className="cancel-button" onClick={onClose}>Cancel</button>
            </div>
        </div>
      </div>
    );
  };

export default Modal;