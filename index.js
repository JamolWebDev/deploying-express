import express from "express";

const app = express();

app.use(express.json());

app.get("*", (req, res) => {
  res.end("Hello from deploying express server...");
});

app.post("*", (req, res) => {
  res.json(req.body);
});

const port = 8080;
app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}/`)
);
