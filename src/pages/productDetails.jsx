import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import axiosInstance from "../apis/config";
import { addToCart } from "../store/cartSlice";
import "./productdetalis.css";

function ProductDetails() {
    const [product, setProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState("");
    const [quantity, setQuantity] = useState(1);
    const params = useParams();
    const dispatch = useDispatch();

    const handleAddToCart = () => {
      dispatch(addToCart({ ...product, quantity }));
    };

    const decrement = () => setQuantity((prev) => Math.max(1, prev - 1));
    const increment = () => setQuantity((prev) => prev + 1);

    useEffect(() => {
        axiosInstance
            .get(`/products/${params.id}`)
            .then(res => {
                setProduct(res.data);
                setSelectedImage(res.data.thumbnail || res.data.images?.[0] || "");
            })
            .catch(error => console.log(error));
    }, [params.id]);

    if (!product) {
        return <div className="spinner-border" role="status"></div>;
    }

    return (
      <div className="container py-5 product-details">
        <div className="row g-5 align-items-center">

          <div className="col-lg-6">
            <div className="product-image-card rounded-4 shadow-sm p-4 bg-white">
              <img
                className="img-fluid rounded main-img"
                src={selectedImage || product.thumbnail}
                alt={product.title}
              />

              {product.images?.length > 1 && (
                <div className="image-preview d-flex gap-2 mt-4 justify-content-center">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      type="button"
                      className={"preview-thumb " + (selectedImage === image ? "active" : "")}
                      style={{ backgroundImage: "url(" + image + ")" }}
                      onClick={() => setSelectedImage(image)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="product-info">
              <h2 className="fw-bold mb-3">{product.title}</h2>
              <p className="text-muted mb-3">{product.description}</p>

              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="rating-box rounded-3 px-3 py-2 bg-light">
                  <span className="text-warning">{Array.from({ length: 5 }, (_, i) => (
                    <span key={i}>{i < Math.round(product.rating) ? "★" : "☆"}</span>
                  ))}</span>
                  <span className="ms-2 text-dark">{product.rating.toFixed(1)}</span>
                </div>
              </div>

              <div className="d-flex align-items-end gap-3 mb-2">
                <h1 className="mb-0 price-display">${product.price}</h1>
                <span className="text-muted align-self-end">or $/month</span>
              </div>
              
              <div className="mb-4">
                <span className={"badge " + (product.stock > 0 ? "bg-success" : "bg-danger") + " py-2 px-3"}>{product.stock > 0 ? "In stock" : "Out of stock"}</span>
              </div>

              <div className="more-info mb-4">
               
                <div className="d-flex flex-wrap gap-2">
                  <span className="btn btn-outline-secondary btn-sm">Category: {product.category}</span>
                  <span className="btn btn-outline-secondary btn-sm">Brand: {product.brand}</span>
                </div>
              </div>

              <div className="product-actions mb-4">
                <div className="d-flex align-items-center gap-2 quantity-control mb-2">
                  <button className="btn btn-outline-secondary btn-square" onClick={decrement}>-</button>
                  <span className="quantity-value">{quantity}</span>
                  <button className="btn btn-outline-secondary btn-square" onClick={increment}>+</button>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="text-success">Only {product.stock} items left!</span>
                  <small className="text-muted">Don't miss it</small>
                </div>
              </div>

              <button className="btn btn-dark btn-lg w-100 mb-3" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          </div>

        </div>
      </div>
    );
}

export default ProductDetails;
