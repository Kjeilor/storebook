import { useState, useEffect } from "react";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ProductCard from "./components/product card/ProductCard";
import Finder from "./components/find bar/Finder";
import "./products.scss";

function Products() {
  const [products, setProducts] = useState([]);

  const handleSearch = (query) => {
    fetch(`http://localhost:3001/products?q=${query}`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };

  const handleDelete = (productId) => {
    // Update the state by removing the deleted product
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
  };

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="prd-wrpr">
      <div className="products">
        <aside>
          <main className="finder">
            <div>
              <Finder onSearch={(query) => handleSearch(query)} />
            </div>
            <section>
              <div>
                <h3>Category</h3>
              </div>
              <div>
                <small>No product categories created</small>
              </div>
            </section>
            <section>
              <div>
                <h3>Catalogues</h3>
              </div>
              <div>
                <small>No product catalogues created</small>
              </div>
            </section>
            <section>
              <div>
                <h3>Top Rated</h3>
              </div>
              <div>
                <small>No top rated products</small>
              </div>
            </section>
          </main>
        </aside>
        <main className="prd-cont-wrpr">
          <section className="prd-cont-nav">
            <div className="cont-add-prd">
              <button className="cta-btn">
                <div>
                  <AddOutlinedIcon />{" "}
                </div>
                <div>
                  <span>Add Product</span>
                </div>
              </button>
            </div>
            <div className="cont-view-toggl">
              <button>
                <GridViewOutlinedIcon />
                <FormatListBulletedOutlinedIcon />
              </button>
            </div>
          </section>
          <section className="prd-cont-main">
        <div className="cont-main-wrpr">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onDelete={handleDelete} />
          ))}
          {products.length === 0 && <p>Your product shelves are empty</p>}
        </div>
      </section>
    </main>
      </div>
    </div>
  );
}

export default Products;

