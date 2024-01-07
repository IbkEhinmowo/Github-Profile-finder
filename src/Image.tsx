import React from "react";
import heroImage from "./assets/hero-image-github-profile.png";
import { useState } from "react";
export default function Image({ onUsernameSubmit }) {
  const [username, setUsername] = useState("github");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with username:", username);
    onUsernameSubmit(username);
  };
  return (
    <div className="image-container">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={username}
          placeholder="Enter GitHub username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <img src={heroImage} alt="Hero" />
    </div>
  );
}
