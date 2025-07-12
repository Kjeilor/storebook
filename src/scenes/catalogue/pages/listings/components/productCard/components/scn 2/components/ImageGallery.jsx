import React from "react";
import PropTypes from "prop-types";

function ImageGallery({ images, onSelect }) {
  return (
    <div>
      {images.map((image, index) => (
        <div key={index} onClick={() => onSelect(image)}>
          <img src={image} alt={`Thumbnail ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ImageGallery;