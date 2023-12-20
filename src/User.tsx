import { Fragment, useState } from "react";
import { useEffect } from "react";

export default function User() {
  const [userData, setUserData] = useState(null);
  const username = "github";
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`,
        );
        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchUserData();
  }, [username]);

  return (
    <Fragment>
      {userData ? (
        <div className="main">
          <div className="profile-container">
            <div className="profile-image">
              <img src={userData.avatar_url} alt="Profile" />
            </div>
            <div className="user-info">
              <div id="followers">
                <p>Followers</p>
                <div className="line"></div>
                <p>{userData.followers}</p>
              </div>
              <div id="following">
                <p>Following</p>
                <div className="line"></div>
                <p>{userData.following}</p>
              </div>

              <div id="location">
                <p>Location</p>
                <div className="line"></div>
                <p>{userData.location}</p>
              </div>
            </div>
          </div>

          <div id="namebio">
            <h1>{userData.name}</h1>
            <p>{userData.bio}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <div></div>
    </Fragment>
  );
}
