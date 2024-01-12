import { Fragment, useEffect, useState } from "react";

export default function Projects({ userData }) {
  const [repos, setRepos] = useState([]);
  const [showAll, setShowAll] = useState(false);

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

  const displayedRepos = showAll ? repos : repos.slice(0, 4);

  return (
    <Fragment>
      {userData ? (
        <div className="main">
          <div id="repositories">
            {displayedRepos.length > 0 ? (
              <ul>
                {displayedRepos.map((repo) => (
                  <div key={repo.id} className="project-tile">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      <section id="name">{repo.name}</section>
                      <section id="description">{repo.description}</section>
                      <section className="stats">
                        <section>
                          <span>{repo.stargazers_count} </span>
                        </section>
                        <section>{repo.forks_count}</section>
                        <section>{repo.watchers_count}</section>
                        <section>
                          <span>last updated :</span>{" "}
                          {new Date(repo.updated_at).toLocaleString()}
                        </section>
                      </section>
                    </a>{" "}
                  </div>
                ))}
              </ul>
            ) : (
              <p>No repositories found</p>
            )}
            {!showAll && (
              <h1>
                <button onClick={() => setShowAll(true)} id="showallbtn">
                  View All Repositories
                </button>
              </h1>
            )}
          </div>
        </div>
      ) : (
        <div className="error">
          <p>NOTHING TO SEE HERE</p>
        </div>
      )}

      <div></div>
    </Fragment>
  );
}
