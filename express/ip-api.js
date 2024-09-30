import axios from "axios";
import express from "express";

const app = express();
let ip = "";

const fetchIpAddress = async () => {
  try {
    const response = await axios.get("https://httpbin.org/ip");
    ip = response.data.origin;
    console.log(`ip: ${ip}`);
  } catch (error) {
    console.error("error", error);
  }
};

fetchIpAddress();

app.get("/ip", (req, res) => {
  if (ip) {
    res.json({ ip: ip });
  } else {
    res.status(500).json({ error: "error" });
  }
});

const port = 8082;
app.listen(port, () => {
  console.log(`Running on ${port}`);
  console.log(`http://localhost:${port}/ip`);
});
