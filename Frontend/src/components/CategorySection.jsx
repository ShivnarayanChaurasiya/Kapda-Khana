
import React from "react";
import { ArrowUpRight } from "lucide-react";
import "./CategorySection.css";

const categories = [
    {
        id: 1,
        name: "T-SHIRTS",
        subtitle: "EVERYDAY ESSENTIALS",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=700&q=85",
        number: "01",
        link: "/shop?category=t-shirts"
    },
    {
        id: 2,
        name: "HOODIES",
        subtitle: "LAYER YOUR STYLE",
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=700&q=85",
        number: "02",
        link: "/shop?category=hoodies"
    },
    {
        id: 3,
        name: "SHIRTS",
        subtitle: "CLASSIC REDEFINED",
        image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=700&q=85",
        number: "03",
        link: "/shop?category=shirts"
    },
    {
        id: 4,
        name: "JEANS",
        subtitle: "DENIM CULTURE",
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=700&q=85",
        number: "04",
        link: "/shop?category=jeans"
    }
];

function CategorySection() {
    return (
        <section className="category-section">

            <div className="category-heading">
                <div>
                    <p className="category-eyebrow">FIND YOUR LOOK</p>
                    <h2>SHOP BY <span>CATEGORY.</span></h2>
                </div>

                <p className="category-description">
                    Different moods. Different styles.
                    Find what feels like you.
                </p>
            </div>

            <div className="category-grid">
                {categories.map((category) => (
                    <a
                        href={category.link}
                        className="category-card"
                        key={category.id}
                    >
                        <img
                            src={category.image}
                            alt={category.name}
                            loading="lazy"
                        />

                        <div className="category-overlay"></div>

                        <span className="category-number">
                            / {category.number}
                        </span>

                        <div className="category-info">
                            <p>{category.subtitle}</p>
                            <h3>{category.name}</h3>
                        </div>

                        <span className="category-arrow">
                            <ArrowUpRight size={22} />
                        </span>
                    </a>
                ))}
            </div>

        </section>
    );
}

export default CategorySection;
