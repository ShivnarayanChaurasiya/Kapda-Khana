
import React, { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import axiosInstance from "../api/axiosInstance";
import "./ProductSection.css";

function ProductSection() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axiosInstance.get("/products");
                setProducts(response.data);
            } catch (err) {
                console.error("Product fetch error:", err);
                setError("Unable to load products. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <section className="product-section">

            <div className="product-heading">
                <div>
                    <p className="product-eyebrow">CURATED FOR YOU</p>
                    <h2>THE LATEST <span>DROPS.</span></h2>
                </div>

                <a href="/shop" className="view-all">
                    VIEW ALL PRODUCTS <ArrowUpRight size={17} />
                </a>
            </div>

            {loading && <p className="product-message">Loading products...</p>}

            {error && <p className="product-message">{error}</p>}

            {!loading && !error && products.length === 0 && (
                <p className="product-message">
                    No products available yet. Check back soon!
                </p>
            )}

            {!loading && !error && products.length > 0 && (
                <div className="product-grid">
                    {products
                        .filter((product) => product.active !== false)
                        .map((product) => (
                            <article className="product-card" key={product.id}>

                                <div className="product-image">
                                    <img
                                        src={product.imageUrl || "https://placehold.co/500x600/f1ede5/171717?text=Kapda+Khana"}
                                        alt={product.name}
                                    />

                                    <span className="product-tag">
                                        NEW ARRIVAL
                                    </span>

                                    <button className="quick-view">
                                        VIEW PRODUCT ↗
                                    </button>
                                </div>

                                <div className="product-details">
                                    <div>
                                        <p className="product-category">
                                            {product.category}
                                        </p>
                                        <h3>{product.name}</h3>
                                    </div>

                                    <p className="product-price">
                                        ₹{Number(product.price).toLocaleString("en-IN")}
                                    </p>
                                </div>

                            </article>
                        ))}
                </div>
            )}
        </section>
    );
}

export default ProductSection;
