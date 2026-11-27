
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, ShoppingBag } from "lucide-react";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Backend authentication will be connected later.
    setError("Login authentication is not connected yet.");
  };

  return (
    <div className="auth-page">
      <div className="auth-image login-image">
        <Link to="/" className="auth-brand">
          <ShoppingBag size={25} />
          KAPDA KHANA
        </Link>

        <div className="auth-image-content">
          <span>WEAR YOUR VIBE</span>
          <h1>
            Style is a way
            <br />
            to express yourself.
          </h1>
          <p>Discover fashion that feels like you.</p>
        </div>
      </div>

      <div className="auth-form-section">
        <Link to="/" className="auth-back">
          ← Back to Home
        </Link>

        <div className="auth-form-container">
          <span className="auth-subtitle">WELCOME BACK</span>
          <h2>Login to your account</h2>
          <p className="auth-description">
            Enter your details to access your account.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="auth-field">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="auth-field">
              <label>Password</label>

              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                </button>
              </div>
            </div>

            <div className="auth-options">
              <label className="remember-option">
                <input type="checkbox" />
                Remember me
              </label>

              <Link to="/forgot-password">Forgot password?</Link>
            </div>

            {error && <p className="auth-error">{error}</p>}

            <button type="submit" className="auth-submit">
              Login Now
            </button>
          </form>

          <p className="auth-switch">
            Don't have an account?
            <Link to="/register"> Create Account</Link>
          </p>

          <p className="auth-footer">
            © 2026 Kapda Khana. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
