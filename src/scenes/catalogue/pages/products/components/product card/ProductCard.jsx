import React, { useState } from "react";
import ImageManager from "./components/scn 2/ImageManager";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import "./productCard.scss";

function ProductCard({ product, onDelete }) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleToggleDropdown = () => setIsDropdownVisible(!isDropdownVisible);

  // Placeholder functions, replace them with actual implementations
  const handleImageUpload = (file) => {
    console.log("Upload image:", file);
    // Implement your image upload logic here
  };

  const handleImageDelete = () => {
    console.log("Delete image");
    // Implement your image delete logic here
  };

  const handleSetDefaultImage = () => {
    console.log("Set default image");
    // Implement your set default image logic here
  };

  return (
    <div
      className={`card ${isDropdownVisible ? "expanded" : ""}`}
      onClick={handleToggleDropdown}
    >
      {product && (
        <>
          <section className="pc-scn-1">
            <div className="sc1-wrpr">
              <label className="chk-bx">
                <input type="checkbox" className="bx" />
                <span className="checkmark"></span>
              </label>
              <div>
                <button className="cta-btn">
                  <MoreVertOutlinedIcon className="btn-icn" />
                </button>
              </div>
            </div>
          </section>
          <section className="pc-scn-2">
            {product.image ? (
              <div className="prd-img">
                <ImageManager
                  className="img"
                  images={[product.image]} // Pass the array of product images
                  onImageUpload={handleImageUpload}
                  onImageDelete={handleImageDelete}
                  onSetDefault={handleSetDefaultImage}
                />
              </div>
            ) : (
              <div>No product image</div>
            )}
          </section>
        </>
      )}
    </div>
  );
}

export default ProductCard;
