import React from "react";

const GitHubAvatar = () => {
  return (
    <div>
      <img
        src="https://avatars.githubusercontent.com/u/119283428?v=4"
        alt="GitHub Avatar"
      />
    </div>
  );
};

const GitHubRepoURL = () => {
  return (
    <div>
      <a
        href="https://github.com/TarathepButka"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3>My GitHub repository</h3>
      </a>
    </div>
  );
};

const GitHubInfo = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>My GitHub Information</h1>
      <GitHubAvatar />
      <GitHubRepoURL />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <GitHubInfo />
    </div>
  );
}

export default App;
