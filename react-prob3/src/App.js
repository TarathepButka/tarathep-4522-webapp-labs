import "./App.css";
import { users } from "./users.js";
import { GitHubInfo } from "./github_info";

export default function App() {
  return (
    <div className="App">
      <GitHubInfo userInfo={users[0]} />
      <GitHubInfo userInfo={users[1]} />
      <GitHubInfo userInfo={users[2]} />
    </div>
  );
}
