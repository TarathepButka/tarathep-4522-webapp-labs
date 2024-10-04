import { GitHubAvatar, GitHubRepoURL } from "./github_data";
import "./App.css";

function GitHubInfo() {
  const userInfo = {
    url: "https://github.com/TarathepButka",
    imgurl: "https://avatars.githubusercontent.com/u/119283428?v=4",
    alt: "Tarathep Butka",
  };
  return (
    <div className="App">
      <h1>{userInfo.alt}</h1>
      <GitHubAvatar userInfo={userInfo} size={400} />
      <GitHubRepoURL userInfo={userInfo} />
    </div>
  );
}

export default GitHubInfo;
