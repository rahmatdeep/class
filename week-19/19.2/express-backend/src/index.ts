import { createClient } from "redis";
import express from "express";

const client = createClient();
const app = express();
app.use(express.json());

app.post("/submit", async(req, res) => {
  const { problemId, userId, code, language } = req.body;

  try {
    await client.lPush(
      "submissions",
      JSON.stringify({ problemId, userId, code, language })
    );
    res.json({
      msg: "Submission recieved!",
    });
  } catch (e) {
    console.log(e);
    res.status(500).send("Failed to store submission");
  }
});

async function startServer() {
  try {
    await client.connect();
    console.log("Connected to Redis");

    app.listen(3000, () => {
      console.log("Listening on port 3000");
    });
  } catch (e) {
    console.log(e);
  }
}

startServer();
