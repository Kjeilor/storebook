import React from "react";
import "./styles/ImageManager.scss";

const ImageManager = ({ images }) => {
  return (
    <div className="image-manager">
      {images.map((image, index) => (
        <div key={index} className="image-preview">
           here
          <img src={image} alt={`Product Preview ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageManager;