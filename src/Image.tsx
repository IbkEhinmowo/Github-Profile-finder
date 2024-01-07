import React, { useState } from "react";
import heroImage from "./assets/hero-image-github-profile.png";

export default function Image({ onUsernameSubmit }) {
  const [username, setUsername] = useState("github");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with username:", username);
    onUsernameSubmit(username);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setUsername(value);
  };

  return (
    <div className="image-container">
      <form onSubmit={handleFormSubmit} className="image-form">
        <input
          type="text"
          value={username}
          placeholder="Enter GitHub username"
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
      <img src={heroImage} alt="Hero" />
    </div>
  );
}
