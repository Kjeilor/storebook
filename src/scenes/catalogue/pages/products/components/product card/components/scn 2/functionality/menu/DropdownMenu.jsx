import React from "react"

function DropdownMenu({ onEdit, onDelete }) {
    const handleEditClick = () => {
        onEdit();
      };
    
      const handleDeleteClick = () => {
        onDelete();
      };
    
      return (
        <div className="dropdown-menu">
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={handleDeleteClick}>Delete</button>
        </div>
      );
}

export default DropdownMenu
