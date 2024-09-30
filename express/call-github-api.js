import axios from "axios";
import express from "express";

const personalAccessToken = "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";
let app = express();
let port = 3000;
app.listen(port, () => {
  console.log(`Running on port ${port}`);
  console.log(`http://localhost:${port}`);
});

app.get("/", function (req, res) {
  const getUserData = async () => {
    try {
      const response = await axios({
        method: "get",
        url: "https://api.github.com/user",
        headers: {
          Authorization: `token ${personalAccessToken}`,
        },
      });

      const { name, location } = response.data;
      res.send(`Github user name is ${name} who live in ${location}`);
      console.log(`Github user name is ${name} who live in ${location}`);
      response;
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  getUserData();
});
