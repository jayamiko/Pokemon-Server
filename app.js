const express = require("express");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

app.post("/pokemon/catch", (req, res) => {
  const rand = Math.round(Math.random() * 1);

  return res.json({
    data: {
      success: rand === 1,
    },
  });
});

app.post("/pokemon/release", (req, res) => {
  const rand = Math.round(Math.random() * 100);

  return res.json({
    data: {
      number: rand,
    },
  });
});

app.post("/pokemon/rename", (req, res) => {
  const newName = req.body["new-name"];
  const renameCount = req.body["rename-count"];

  const suffix = fibonacci(renameCount - 1);

  return res.json({
    data: {
      "new-name": `${newName}-${suffix}`,
    },
  });
});

const fibonacci = (index) => {
  const indexList = [0, 1];
  let i = 2;

  while (i <= index) {
    indexList[i] = indexList[i - 1] + indexList[i - 2];
    i++;
  }

  return indexList[index];
};

const port = 8080;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
