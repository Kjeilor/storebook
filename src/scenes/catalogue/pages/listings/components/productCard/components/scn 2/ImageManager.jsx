import React from "react";
import "./styles/ImageManager.scss";

const ImageManager = ({ images , altText}) => {
  return (
    <div className="image-manager">
      {images.map((image, index) => (
        <div key={index} className="image-preview">
          <img src={image} alt={altText} />
        </div>
      ))}
    </div>
  );
};

export default ImageManager;
