
import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import "./Register.css";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
    setSuccess("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(formData).some((value) => !value.trim())) {
      setError("Please fill in all fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Please enter a valid email.");
      return;
    }

    if (!/^[0-9]{10}$/.test(formData.phone)) {
      setError("Enter a valid 10-digit phone number.");
      return;
    }

    if (formData.password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Backend registration will be connected later.
    setSuccess("Form validated! Backend registration is not connected yet.");
  };

  return (
    <div className="register-page">
      <div className="register-image">
        <div className="register-image-content">
          <span>YOUR STYLE. YOUR STORY.</span>
          <h1>Make room for your individuality.</h1>
          <p>Join the Kapda Khana community.</p>
        </div>
      </div>

      <div className="register-form-section">
        <Link to="/" className="register-back">
          ← Back to Home
        </Link>

        <div className="register-form-container">
          <span className="auth-subtitle">JOIN THE COMMUNITY</span>
          <h2>Create your account</h2>
          <p className="register-description">
            Sign up and discover your personal style.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="register-field">
              <label>Full Name</label>
              <input
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="register-field">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="register-field">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="10-digit mobile number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="register-field">
              <label>Password</label>
              <div className="register-password">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Minimum 8 characters"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="register-field">
              <label>Confirm Password</label>
              <div className="register-password">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  aria-label="Toggle confirm password visibility"
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <label className="register-terms">
              <input type="checkbox" required />
              I agree to the Terms & Conditions.
            </label>

            {error && <p className="register-error">{error}</p>}
            {success && <p className="register-success">{success}</p>}

            <button type="submit" className="register-submit">
              Create Account
            </button>
          </form>

          <p className="register-switch">
            Already have an account?
            <Link to="/login"> Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
