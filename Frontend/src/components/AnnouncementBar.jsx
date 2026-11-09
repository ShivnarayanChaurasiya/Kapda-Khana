
import React from "react";
import "./AnnouncementBar.css";

function AnnouncementBar() {
    const message = "NEW DROP  ✦  PREMIUM STREETWEAR  ✦  WEAR YOUR VIBE  ✦  MADE FOR THE BOLD  ✦";

    return (
        <div className="announcement-bar">
            <div className="announcement-track">
                <div className="announcement-content">
                    <span>{message}</span>
                    <span>{message}</span>
                </div>
                <div className="announcement-content" aria-hidden="true">
                    <span>{message}</span>
                    <span>{message}</span>
                </div>
            </div>
        </div>
    );
}

export default AnnouncementBar;
