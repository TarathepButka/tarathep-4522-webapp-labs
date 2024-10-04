export const GitHubAvatar = ({ size = 50, userInfo }) => {
  return (
    <div>
      <img
        src={userInfo.imgURL}
        alt="GitHub Avatar"
        width={size}
        height={size}
      />
    </div>
  );
};

export const GitHubRepoURL = ({ userInfo }) => {
  return (
    <div>
      <a href={userInfo.url} target="_blank" rel="noopener noreferrer">
        <h2>GitHub repository</h2>
      </a>
    </div>
  );
};
