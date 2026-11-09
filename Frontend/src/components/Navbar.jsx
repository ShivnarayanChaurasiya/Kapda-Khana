
import React from "react";
import { Search, ShoppingBag, Menu, User } from "lucide-react";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">

            {/* Logo */}
            <div className="nav-logo">
                KAPDA<span>KHANA.</span>
            </div>

            {/* Navigation Links */}
            <div className="nav-links">
                <a href="/">Home</a>
                <a href="/shop">Shop</a>
                <a href="/shop?category=men">Men</a>
                <a href="/shop?category=women">Women</a>
                <a href="/shop?category=accessories">Accessories</a>
            </div>

            {/* Navbar Actions */}
            <div className="nav-actions">
                <button aria-label="Search">
                    <Search size={21} />
                </button>

                <button aria-label="Account">
                    <User size={21} />
                </button>

                <button aria-label="Shopping cart">
                    <ShoppingBag size={21} />
                    <span className="cart-count">0</span>
                </button>

                <button className="menu-btn" aria-label="Menu">
                    <Menu size={23} />
                </button>
            </div>

        </nav>
    );
}

export default Navbar;
