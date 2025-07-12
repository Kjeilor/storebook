import React from 'react';
import './modal.scss'; 

function Modal({ children, onClose }) {
  // Basic modal structure. You'd typically add more sophisticated
  // overlay, close button, and accessibility features.
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>&times;</button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
