import "./App.css";
import { users } from "./users.js";
import { GitHubInfo } from "./github_info";
import { useState } from "react";

export default function App() {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);
  const nextClick = () => {
    setIndex(index + 1);
    setShow(false);
  };
  const prevClick = () => {
    setIndex(index - 1);
    setShow(false);
  };
  const showFollowers = () => {
    setShow(!show);
  };

  return (
    <div className="App">
      <h1>Sample GitHub repositories</h1>
      <GitHubInfo userInfo={users[index]} />
      <span>
        <button className="show-btn" onClick={showFollowers}>
          {show ? "Hide" : "Show"} followers
        </button>{" "}
        <b>{show && users[index].followers}</b>
      </span>
      <footer>
        <button className="prev-btn" onClick={prevClick} disabled={index === 0}>
          Previous
        </button>
        <button
          className="next-btn"
          onClick={nextClick}
          disabled={index === users.length - 1}
        >
          Next
        </button>
      </footer>
    </div>
  );
}
