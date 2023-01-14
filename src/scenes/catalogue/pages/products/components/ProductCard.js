import "./productCard.scss";

function ProductCard() {
  return (
    <div className="card">
      <section className="pc-scn-1">
        <div className="prd-img">Image</div>
        <div className="prd-attr">
          <div><small>Attr-Col</small></div>
          <div><small>Attr-Mat</small></div>
          <div><small>Attr-Siz</small></div>
        </div>
      </section>

      <section className="pc-scn-2">
        <div>
          <h3 className="prd-ttl">Title</h3>
        </div>

        <div>
          <span className="prd-sku">SKU</span>
        </div>

        <div>
          <span className="prd-desc">
            Description - Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Expedita, minus.
          </span>
        </div>
      </section>
    </div>
  );
}

export default ProductCard;
