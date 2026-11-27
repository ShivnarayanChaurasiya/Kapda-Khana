
import { Link } from "react-router-dom";
import {
//   Instagram,
//   Facebook,
//   Twitter,
  ArrowUpRight,
  Send,
  ShoppingBag,
} from "lucide-react";

import "./Footer.css";

function Footer() {
  const handleNewsletter = (e) => {
    e.preventDefault();
    alert("Newsletter subscription will be available soon!");
  };

  return (
    <footer className="kk-footer">

      {/* Newsletter */}
      <section className="footer-newsletter">
        <div className="footer-newsletter-content">
          <span>STAY IN STYLE</span>
          <h2>Get the latest drops.</h2>
          <p>
            Subscribe to our newsletter for new collections,
            exclusive offers and fashion updates.
          </p>
        </div>

        <form
          className="footer-newsletter-form"
          onSubmit={handleNewsletter}
        >
          <input
            type="email"
            placeholder="Enter your email address"
            aria-label="Email address"
            required
          />
          <button type="submit">
            Subscribe <Send size={16} />
          </button>
        </form>
      </section>

      {/* Main Footer */}
      <div className="footer-main">

        <div className="footer-brand-column">
          <Link to="/" className="footer-logo">
            <ShoppingBag size={25} />
            <span>KAPDA <b>KHANA</b></span>
          </Link>

          <span className="footer-tagline">WEAR YOUR VIBE.</span>

          <p>
            Fashion is more than what you wear.
            It's how you express yourself.
            Discover your style with Kapda Khana.
          </p>

          <div className="footer-socials">
            <a href="https://instagram.com" target="_blank"
              rel="noreferrer" aria-label="Instagram">inst  </a>
            <p insta />

            <a href="https://facebook.com" target="_blank"
              rel="noreferrer" aria-label="Facebook" >fcb
             
            </a>

            <a href="https://twitter.com" target="_blank"
              rel="noreferrer" aria-label="Twitter"> Twit
             
            </a> 


             {/* <a
    href="https://facebook.com"
    target="_blank"
    rel="noreferrer"
    aria-label="Facebook"
  ></a> */}
          </div>
        </div>

        <div className="footer-links-column">
          <h3>EXPLORE</h3>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop All</Link>
          <Link to="/shop">New Arrivals</Link>
          <Link to="/shop">Best Sellers</Link>
          <Link to="/cart">My Cart</Link>
        </div>

        <div className="footer-links-column">
          <h3>MY ACCOUNT</h3>
          <Link to="/login">Login</Link>
          <Link to="/register">Create Account</Link>
          <Link to="/cart">Shopping Cart</Link>
          <Link to="/wishlist">Wishlist</Link>
          <Link to="/profile">My Profile</Link>
        </div>

        <div className="footer-links-column">
          <h3>CUSTOMER CARE</h3>
          <a href="mailto:support@kapdakhana.com">Contact Us</a>
          <a href="mailto:support@kapdakhana.com">Help Center</a>
          <Link to="/shipping-policy">Shipping Policy</Link>
          <Link to="/return-policy">Return & Refund</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Kapda Khana. All rights reserved.</p>

        <p className="footer-made">
          MADE FOR YOUR STYLE <ArrowUpRight size={15} />
        </p>

        <div className="footer-payment">
          <span>UPI</span>
          <span>VISA</span>
          <span>MASTER CARD</span>
        </div>
      </div>

    </footer>
  );


}

export default Footer;
