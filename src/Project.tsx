import { Fragment, useEffect, useState } from "react";

export default function Projects({ userData }) {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(userData.repos_url);
        if (!response.ok) {
          throw new Error(
            `GitHub API request failed with status: ${response.status}`,
          );
        }

        const repositories = await response.json();
        setRepos(repositories);
      } catch (error) {
        console.error("Error fetching repositories:", error.message);
      }
    };

    if (userData && userData.repos_url) {
      fetchRepos();
    }
  }, [userData]);

  return (
    <Fragment>
      {userData ? (
        <div className="main">
          <div id="repositories">
            <h2>Repositories</h2>
            {repos.length > 0 ? (
              <ul>
                {repos.map((repo) => (
                  <div key={repo.id} id="projects">
                    <div className="project-tile">
                      <span>{repo.name}</span>
                      <span>{repo.description}</span>
                    </div>
                  </div>
                ))}
              </ul>
            ) : (
              <p>No repositories found</p>
            )}
          </div>
        </div>
      ) : (
        <p>NOTHING TO SEE HERE</p>
      )}

      <div></div>
    </Fragment>
  );
}
