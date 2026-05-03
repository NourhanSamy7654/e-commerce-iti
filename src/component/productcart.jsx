import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  return (
    <div className="col">
      <div className="card h-100 border-0 shadow-sm rounded-4 position-relative overflow-hidden">

        <span
          className={`badge position-absolute m-3 px-3 py-2 rounded-pill ${
            product.stock > 0 ? "bg-success" : "bg-danger"
          }`}
          style={{ zIndex: 1 }}
        >
          {product.stock > 0 ? "In stock" : "Out of stock"}
        </span>

        <Link to={`/product-details/${product.id}`}>
          <img
            src={product.thumbnail}
            className="card-img-top p-4"
            style={{
              height: "220px",
              objectFit: "contain",
              transition: "0.3s",
            }}
            alt={product.title}
          />
        </Link>

        <div className="card-body d-flex flex-column">
          <h6
            className="fw-semibold mb-2"
            style={{
              minHeight: "48px",
              overflow: "hidden",
            }}
          >
            {product.title}
          </h6>

          <p className="fw-bold text-primary fs-5 mb-4">
            ${product.price}
          </p>

          <div className="d-flex gap-2 mt-auto">
            <Link
              to={`/product-details/${product.id}`}
              className="btn btn-outline-primary flex-fill rounded-3"
            >
              View Details
            </Link>

            <button
              type="button"
              className="btn btn-success flex-fill rounded-3"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProductCard;