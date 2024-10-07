export const GitHubInfo = ({ size = 200, userInfo }) => {
  return (
    <div>
      <h2>
        <a href={userInfo.url} target="_blank" rel="noopener noreferrer">
          {userInfo.alt}
        </a>
      </h2>
      <img
        src={userInfo.imgURL}
        alt="GitHub Avatar"
        width={size}
        height={size}
      />
    </div>
  );
};
