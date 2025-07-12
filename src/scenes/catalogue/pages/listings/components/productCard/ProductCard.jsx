import React, { useState } from "react";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import "./productCard.scss";

function ProductCard({ product, onDelete, type }) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const handleToggleDropdown = () => setIsDropdownVisible(!isDropdownVisible);

  return (
    <div
      className={`card ${isDropdownVisible ? "expanded" : ""} ${type}-card`}
      onClick={handleToggleDropdown}
    >
      {product ? (
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
                {/* FIX: Removed 'image' from alt attribute */}
                <img src={product.image} alt={product.name} />
              </div>
            ) : (
              <div className="prd-img">
                <p>No {type} image</p>
                <p>{product.name}</p>
              </div>
            )}
          </section>
          <section className="Pc-scn-3">
            <div className="prd-dtls">
              <p className="name">Name: {product.name}</p>
              <p className="sku">SKU: {product.sku}</p>
              <p className="attr">Attributes: {JSON.stringify(product.attributes)}</p>
            </div>
          </section>
          {/* Uncomment when onDelete is implemented */}
          {/* <button onClick={(e) => { e.stopPropagation(); onDelete(product.$id); }}>
            Delete {product.name}
          </button> */}
        </>
      ) : (
        <div>No product data</div>
      )}
    </div>
  );
}

export default ProductCard;
