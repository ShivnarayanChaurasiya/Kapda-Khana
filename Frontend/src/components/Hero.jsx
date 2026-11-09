
import React from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import "./Hero.css";

function Hero() {
    return (
        <section className="hero">

            <div className="hero-content">
                <p className="hero-eyebrow">
                    <span className="eyebrow-line"></span>
                    NEW SEASON / 2026 COLLECTION
                </p>

                <h1>
                    WEAR
                    <br />
                    YOUR <span>VIBE.</span>
                </h1>

                <p className="hero-description">
                    Not made to fit in. Made to stand out.
                    Discover everyday essentials with a different attitude.
                </p>

                <div className="hero-buttons">
                    <a href="/shop" className="hero-primary-btn">
                        EXPLORE COLLECTION
                        <ArrowUpRight size={18} />
                    </a>

                    <a href="/shop" className="hero-secondary-btn">
                        DISCOVER MORE
                        <ArrowRight size={17} />
                    </a>
                </div>

                <div className="hero-bottom-note">
                    <span>01 / 03</span>
                    <span>BUILT FOR YOUR EVERYDAY</span>
                </div>
            </div>

            <div className="hero-visual">
                <div className="hero-image-frame">
                    <img
                        src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1000&q=85"
                        alt="Streetwear fashion collection"
                    />

                    <div className="image-overlay"></div>

                    <div className="image-caption">
                        <span>THE STREET EDIT</span>
                        <span>EST. 2026</span>
                    </div>
                </div>

                <div className="hero-sticker">
                    <span>STYLE</span>
                    <span>WITHOUT</span>
                    <span>RULES.</span>
                </div>

                <div className="hero-side-text">
                    KAPDA KHANA — ORIGINAL STREETWEAR
                </div>
            </div>

            <div className="hero-scroll">
                SCROLL TO EXPLORE
                <span></span>
            </div>

        </section>
    );
}

export default Hero;
