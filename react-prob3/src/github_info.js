import { GitHubAvatar, GitHubRepoURL } from "./github_data";
export const GitHubInfo = ({ userInfo }) => {
  return (
    <div>
      <h1>{userInfo.alt}</h1>
      <GitHubAvatar userInfo={userInfo} />
      <GitHubRepoURL userInfo={userInfo} />
    </div>
  );
};
