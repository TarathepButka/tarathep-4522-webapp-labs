import React from 'react';

export const GitHubAvatar = ({ size = 50, userInfo }) => {
  return (
    <div>
      <img 
        src={userInfo.imgurl} 
        alt="GitHub Avatar" 
        style={{ width: `${size}`}} 
      />
    </div>
  );
};

export const GitHubRepoURL = ({ userInfo }) => {
  return (
    <div>
      <a 
        href={userInfo.url} 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ color: 'blue', textDecoration: 'underline' }}
      >
        <h2>GitHub repository</h2>
      </a>
    </div>
  );
};
