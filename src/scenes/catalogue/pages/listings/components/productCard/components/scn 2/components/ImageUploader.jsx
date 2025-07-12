import React from "react";
import PropTypes from "prop-types";

function ImageUploader({ onImageUpload }) {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    onImageUpload(file);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
}

ImageUploader.propTypes = {
  onImageUpload: PropTypes.func.isRequired,
};

export default ImageUploader;

