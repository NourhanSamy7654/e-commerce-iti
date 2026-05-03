import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useContext } from "react";
import LanguageContext from "../../context/langauge";

function Navbar() {
  const { lang, setLang } = useContext(LanguageContext);
  const cartItems = useSelector((state) => state.cart.items);
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top">
      <div className="container">

        {/* BRAND */}
        <Link className="navbar-brand fw-bold text-success" to="/">
          🛍️ ProductApp
        </Link>

        {/* TOGGLER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* COLLAPSE */}
        <div className="collapse navbar-collapse" id="navbarNav">

          {/* CENTER LINKS */}
          <ul className="navbar-nav mx-auto text-center gap-lg-3 gap-2 mt-3 mt-lg-0">

            <li className="nav-item">
              <Link className="nav-link hover-link" to="/register">
                Register
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link hover-link" to="/login">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link hover-link" to="/about">
                About
              </Link>
            </li>
          </ul>

          {/* RIGHT SIDE */}
          <div className="d-flex flex-column flex-lg-row align-items-center gap-2 mt-3 mt-lg-0">

            {/* CART */}
            <Link
              to="/cart"
              className="btn btn-outline-light position-relative"
            >
              🛒 Cart
              <span className="position-absolute top-0 start-100 translate-middle badge bg-success">
                {totalCount}
              </span>
            </Link>

            {/* LANGUAGE */}
            <select
              className="form-select form-select-sm bg-dark text-white border-secondary"
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              style={{ width: "90px" }}
            >
              <option value="en">EN</option>
              <option value="ar">AR</option>
            </select>

          </div>

        </div>
      </div>

      {/* STYLES */}
      <style>{`
        .hover-link {
          transition: 0.3s;
          border-radius: 6px;
          padding: 6px 12px;
        }

        .hover-link:hover {
          background: rgba(255,255,255,0.1);
          color: #28a745 !important;
        }

        /* fix spacing under fixed navbar */
        body {
          padding-top: 70px;
        }
      `}</style>
    </nav>
  );
}

export default Navbar;