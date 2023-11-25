import React from "react";

function Image({ imageUrl, altText }) {
  return (
    <img src={imageUrl} alt={altText} />
  );
}

export default Image;