import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useContext } from "react";
import LanguageContext from "../../context/langauge";

function Navbar() {
  const { lang, setLang } = useContext(LanguageContext);
  const cartItems = useSelector((state) => state.cart.items);
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top py-2">
      <div className="container">

        
        <Link className="navbar-brand fw-bold fs-4 text-success" to="/">
          🛍️ ProductApp
        </Link>

        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

         
          <ul className="navbar-nav mx-auto text-center gap-2">

            <li className="nav-item">
              <Link className="nav-link px-3 rounded hover-link" to="/register">
                Register
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-3 rounded hover-link" to="/login">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-3 rounded hover-link" to="/about">
                About
              </Link>
            </li>
          </ul>

          
          <div className="d-flex align-items-center gap-3">

           
            <Link to="/cart" className="btn btn-outline-light position-relative px-3">
              🛒 Cart
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                {totalCount}
              </span>
            </Link>

            <select
              className="form-select form-select-sm bg-dark text-white border-secondary"
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              style={{ width: "110px" }}
            >
              <option value="en">EN</option>
              <option value="ar">AR</option>
            </select>

          </div>

        </div>
      </div>

  
      <style>
        {`
          .hover-link {
            transition: 0.3s;
          }
          .hover-link:hover {
            background: rgba(255,255,255,0.1);
            color: #376b4a !important;
          }
        `}
      </style>
    </nav>
  );
}

export default Navbar;