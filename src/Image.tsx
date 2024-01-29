import React, { useState, useEffect } from "react";
import heroImage from "./assets/hero-image-github-profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Image({ onUsernameSubmit }) {
  const [username, setUsername] = useState<string>("");
  const [names, setNames] = useState<any>([]);
  const [render, setRender] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!username) {
          setNames([]);
          return;
        }
        const response = await fetch(
          `https://api.github.com/search/users?q=${username}&per_page=5`,
        );
        const data = await response.json();

        if (data.items) {
          console.log(data.items);
          const filteredUsers = data.items.map((user) => ({
            name: user.login,
            avatar: user.avatar_url,
          }));
          setNames(filteredUsers);
        }
      } catch (error) {
        console.error("Error fetching usernames:", error);
        setNames([]); // Set names to an empty array in case of an error
      }
    };

    fetchData();
  }, [username]); // Run the effect whenever 'username' changes

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with username:", username);
    onUsernameSubmit(username);
    setRender(false);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setUsername(value);
    setRender(true);
    console.log(render);
  };
  const handlelist = (name) => {
    setUsername(name.name);
    onUsernameSubmit(name.name);
    setRender(false);
  };

  return (
    <div className="image-container">
      <form onSubmit={handleFormSubmit} className="image-form">
        <div className="search-bar">
          <input
            type="text"
            value={username}
            placeholder="search GitHub username"
            onChange={handleInputChange}
            // Handle the onBlur event
          />
          <button type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </form>
      <img src={heroImage} alt="Hero" id="hero" />
      {names.length > 0 && render && (
        <div id="user-list">
          <ul>
            {names.map((name, index) => (
              <li
                key={index}
                onClick={() => {
                  handlelist(name);
                }}
              >
                <div id="namelist">
                  <img
                    src={name.avatar}
                    alt={`${name.name}'s Avatar`}
                    id="avatar"
                    width="20px"
                  />
                  <p>{name.name}</p>
                  <p id="bio">{name.bio}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
