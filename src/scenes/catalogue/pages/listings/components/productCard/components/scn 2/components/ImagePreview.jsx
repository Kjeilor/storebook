import React from "react";
import PropTypes from "prop-types";

function ImagePreview({ image, onDelete, onSetDefault }) {
  return (
    <div>
      {image && (
        <div>
          <img src={image} alt="Preview" />
          <button onClick={onDelete}>Delete Image</button>
          <button onClick={onSetDefault}>Set as Default</button>
        </div>
      )}
    </div>
  );
}

ImagePreview.propTypes = {
  image: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
  onSetDefault: PropTypes.func.isRequired,
};

export default ImagePreview;
