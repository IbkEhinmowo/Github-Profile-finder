import { Fragment, useState } from "react";
import { useEffect } from "react";

export default function User({ searchedName }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async (username) => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.github.com/users/${username}`,
        );
        if (response.ok) {
          const data = await response.json();
          setUserData(data);
          setError(null); // Reset error if data fetch is successful
        } else {
          setError("User not found");
          setUserData(null); // Reset userData in case of error
        }
      } catch (error) {
        setError("Error fetching user data");
      } finally {
        setLoading(false);
      }
    };

    if (searchedName) {
      fetchUserData(searchedName);
    }
  }, [searchedName]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userData) {
    return <div>No user data available</div>;
  }

  return (
    <div>
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
    </div>
  );
}
