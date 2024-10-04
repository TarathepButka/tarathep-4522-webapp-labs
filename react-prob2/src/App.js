import React from 'react';
import { GitHubAvatar, GitHubRepoURL } from './github_data';
import './App.css';

function App() {
  const userInfo = {
    url: "https://github.com/TarathepButka",
    imgurl: "https://avatars.githubusercontent.com/u/119283428?v=4",
    alt:"Tarathep Butka"
  };
  return (
    <div className="App">
      <h1>{userInfo.alt}</h1>
      <GitHubAvatar userInfo={userInfo} size={50} />
      <GitHubRepoURL userInfo={userInfo} />
    </div>
  );
}

export default App;
