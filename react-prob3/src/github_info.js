import React from 'react';

export const GitHubInfo = ({ userInfo }) => {
  return (
    <div>
      <h1>{userInfo.alt}</h1>
      <img 
        src={userInfo.imgURL} 
        alt="GitHub Avatar" 
        style={{ width: "50px"}} 
      />
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
