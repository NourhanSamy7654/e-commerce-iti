import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../apis/config";
import Swal from "sweetalert2";

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: null,
    email: null,
    username: null,
    password: null,
    confirmPassword: null,
  });
  const [loading, setLoading] = useState(false);

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return value.trim().length === 0 ? "Name is required" : null;
      case "email":
        if (value.trim().length === 0) return "Email address is required";
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? null
          : "Email address must be in a valid format";
      case "username":
        if (value.trim().length === 0) return "Username is required";
        return /\s/.test(value) ? "Username cannot contain spaces" : null;
      case "password":
        if (value.length === 0) return "Password is required";
        if (value.length < 8) return "Password length must not be less than 8 characters";
        if (!/[a-z]/.test(value)) return "Password must contain at least one lowercase letter";
        if (!/[A-Z]/.test(value)) return "Password must contain at least one uppercase letter";
        if (!/\d/.test(value)) return "Password must contain at least one digit";
        if (!/[@%$#!^&*]/.test(value)) return "Password must contain at least one special character (@%$#!^&*)";
        return null;
      case "confirmPassword":
        if (value.length === 0) return "Confirm Password is required";
        return value !== form.password ? "Passwords do not match" : null;
      default:
        return null;
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = Object.keys(form).reduce((acc, key) => {
      acc[key] = validateField(key, form[key]);
      return acc;
    }, {});

    setFormErrors(nextErrors);

    const hasErrors = Object.values(nextErrors).some((value) => value !== null);
    if (hasErrors) {
      return;
    }

    setLoading(true);

    try {
      const dataToSubmit = {
        name: form.name,
        email: form.email,
        username: form.username,
        password: form.password,
      };

      await Swal.fire({
        title: "Registration Data",
        text: JSON.stringify(dataToSubmit, null, 2),
        icon: "info",
        confirmButtonText: "Proceed",
      });

      await axiosInstance.post("/auth/register", dataToSubmit);

      await Swal.fire({
        title: "Success!",
        text: "Registration successful. Redirecting to home page...",
        icon: "success",
        timer: 1500,
      });

      navigate("/");
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: err.response?.data?.message || "Registration failed. Please try again.",
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="card-title mb-4">Register</h2>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={`form-control ${formErrors.name ? "is-invalid" : "shadow-sm"}`}
                  />
                  {formErrors.name && (
                    <div className="invalid-feedback d-block">{formErrors.name}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`form-control ${formErrors.email ? "is-invalid" : "shadow-sm"}`}
                  />
                  {formErrors.email && (
                    <div className="invalid-feedback d-block">{formErrors.email}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">User Name</label>
                  <input
                    type="text"
                    name="username"
                    value={form.username}
                    onChange={handleChange}
                    className={`form-control ${formErrors.username ? "is-invalid" : "shadow-sm"}`}
                  />
                  {formErrors.username && (
                    <div className="invalid-feedback d-block">{formErrors.username}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    className={`form-control ${formErrors.password ? "is-invalid" : "shadow-sm"}`}
                  />
                  {formErrors.password && (
                    <div className="invalid-feedback d-block">{formErrors.password}</div>
                  )}
                  <small className="text-muted">
                    Example of a valid password: P@ssword1234
                  </small>
                </div>

                <div className="mb-4">
                  <label className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    className={`form-control ${formErrors.confirmPassword ? "is-invalid" : "shadow-sm"}`}
                  />
                  {formErrors.confirmPassword && (
                    <div className="invalid-feedback d-block">{formErrors.confirmPassword}</div>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn-success w-100"
                  disabled={loading}
                >
                  {loading ? "Registering..." : "Register"}
                </button>
              </form>

              <p className="mt-3 text-center">
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register