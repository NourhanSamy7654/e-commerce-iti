import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity, clearCart } from "../store/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleDecrease = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
  };

  const handleIncrease = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  if (!cartItems.length) {
    return (
      <div className="container py-5 ">
        <h3>Your cart is empty.</h3>
        <p>Add some products to the cart first.</p>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h3 className="mb-4">Shopping Cart</h3>

      <div className="list-group mb-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="list-group-item d-flex align-items-center justify-content-between"
          >
            <div className="d-flex gap-3 align-items-center">
              <img
                src={item.thumbnail}
                alt={item.title}
                style={{ width: 80, height: 80, objectFit: "cover" }}
              />
              <div>
                <h5>{item.title}</h5>
                <p className="mb-1">${item.price.toFixed(2)}</p>
                <div className="d-flex align-items-center gap-2">
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => handleDecrease(item)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => handleIncrease(item)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="text-end">
              <p className="mb-2">Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-between align-items-center">
        <h4>Total: ${total.toFixed(2)}</h4>
        <button className="btn btn-outline-danger" onClick={() => dispatch(clearCart())}>
          Clear Cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
