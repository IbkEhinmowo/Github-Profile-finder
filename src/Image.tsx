import React from "react";
import heroImage from "./assets/hero-image-github-profile.png"; // Adjust the path based on your project structure

export default function Image() {
  return (
    <div className="image-container">
      <img src={heroImage} alt="Hero" />
    </div>
  );
}
