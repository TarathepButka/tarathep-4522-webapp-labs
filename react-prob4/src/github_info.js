export const GitHubInfo = ({ size = 100, userInfo }) => {
  let ismorethan = userInfo.followers >= 10000;
  if(ismorethan){
    return (
      <li>
        <img
        src={userInfo.imgURL}
        alt="GitHub Avatar"
        width={size}
        height={size}
      />
        <a href={userInfo.url} target="_blank" rel="noopener noreferrer">
          {userInfo.alt} ({userInfo.followers} followers)
        </a>
      </li>
    );
  }return (
    <li>
      <img
        src={userInfo.imgURL}
        alt="GitHub Avatar"
        width={size}
        height={size}
      />
      <a href={userInfo.url} target="_blank" rel="noopener noreferrer">
        {userInfo.alt}
      </a>
    </li>
  );
};
