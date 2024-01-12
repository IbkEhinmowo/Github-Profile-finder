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
      console.log(userData);
    }
  }, [userData]);

  return (
    <Fragment>
      {userData ? (
        <div className="main">
          <div id="repositories">
            {repos.length > 0 ? (
              <ul>
                {repos.map((repo) => (
                  <div key={repo.id} className="project-tile">
                    <section id="name">{repo.name}</section>
                    <section id="description">{repo.description}</section>
                    <section className="stats">
                      <section>{repo.stargazers_count}</section>
                      <section>{repo.forks_count}</section>
                      <section>{repo.watchers_count}</section>
                      <section>{repo.updated_at}</section>
                    </section>
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
