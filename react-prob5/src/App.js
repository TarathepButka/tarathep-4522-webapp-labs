import "./App.css";
import { users } from "./users.js";
import { GitHubInfo } from "./github_info";

export default function App() {
    return (
      <div className="App">
        <h1>Popular GitHub repositories</h1>
        <GitHubInfo userInfo={users} />
      </div>
    );
}
