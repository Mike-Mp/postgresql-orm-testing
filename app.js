import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send({ message: "Welcome to do api" });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
