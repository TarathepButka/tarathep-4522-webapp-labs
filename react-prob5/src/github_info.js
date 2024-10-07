export const GitHubInfo = ({ size = 100, userInfo }) => {
  const popular = userInfo.filter((userpop) => userpop.followers > 10000);
  const popularUsers = popular.map((userpop) => (
    <li key={userpop.url}>
      <img
        src={userpop.imgURL}
        alt="GitHub Avatar"
        width={size}
        height={size}
      />
      <span>
        <a href={userpop.url} target="_blank" rel="noopener noreferrer">
          {userpop.alt}
        </a>{" "}
        ({userpop.followers} followers)
      </span>
    </li>
  ));
  return <ol>{popularUsers}</ol>;
};
