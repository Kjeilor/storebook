import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import DropdownMenu from "./components/scn 2/functionality/menu/DropdownMenu";
import Attributes from "./components/scn 1/attributes/Attributes";
import Image from "./components/scn 1/images/Image";
import Name from "./components/scn 2/name/Name";
import Sku from "./components/scn 2/sku/Sku";
import Description from "./components/scn 2/description/Description";
import "./productCard.scss";

function ProductCard({ product, onDelete }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => setIsExpanded(!isExpanded);
  const handleEdit = () => console.log("Edit product");
  
  const handleDelete = async () => {
    try {
      if (!product) {
        console.error("Product data is missing");
        return;
      }

      const productId = product.id;

      console.log("Deleting product with ID:", productId);

      // Delete the product
      const response = await fetch(
        `http://localhost:3001/products/${productId}`,
        { method: "DELETE" }
      );

      if (!response.ok) throw new Error("Network response was not ok");

      console.log("Product deleted successfully");
      onDelete(productId); // Callback to inform the parent component about the deletion
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className={`card ${isExpanded ? "expanded" : ""}`} onClick={handleToggle}>
      {product && (
        <>
          {!isExpanded && <DropdownMenu onEdit={handleEdit} onDelete={handleDelete} />}
          <div className={`default-view ${isExpanded ? "expanded-view" : ""}`}>
            <div className="pc-scn-1">
              <div className="prd-img">
                <Image imageUrl={product.image} altText={product.name} />
              </div>
              <div className="prd-attr">
                <Attributes attributes={product.attributes} />
              </div>
            </div>
            <div className="pc-scn-2">
              <div>
                <Name name={product.name} />
              </div>
            </div>
          </div>
          {isExpanded && (
            <div className="expanded-view">
              <div className="pc-scn-1">
                <div>
                  <Sku sku={product.sku} />
                </div>
              </div>
              <div className="pc-scn-2">
                <div>
                  <Name name={product.name} />
                </div>
                <div className="prd-rating">
                  <Rating value={product.rating} readOnly />
                </div>
                <div>
                  <Description description={product.description} />
                </div>
                <div>
                  <Sku sku={product.sku} />
                </div>
                <div>
                  <span>Price: {product.price}</span>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default ProductCard;