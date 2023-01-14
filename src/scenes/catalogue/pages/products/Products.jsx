import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ProductCard from "./components/ProductCard";
import "./products.scss";

function Products() {
  return (
    <div className="prd-wrpr">
      <div className="products">
        <aside>
          <main className="finder">
            <div>
              <form action="" className="find-bar">
                <input
                  type="text"
                  placeholder="Find Products..."
                  className="input"
                  name="q"
                />
                <button type="submit" className="find-btn">
                  <SearchOutlinedIcon />
                </button>
              </form>
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
                    <div><AddOutlinedIcon /> </div>
                    <div><span>Add Product</span></div>
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
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              {/* <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/> */}
              {/* <p>Your product shelves are empty</p> */}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Products;
