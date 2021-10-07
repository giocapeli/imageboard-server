const express = require("express");

const app = express();

const port = process.env.PORT || 4000;

app.listen(port, () => console.log("Server running."));

const userRouter = require("./routers/user");

app.use(express.json());

app.get("/", async (req, res, next) => {
  try {
    res.send("Hello");
  } catch (e) {
    next(e);
  }
});

app.use("/users", userRouter);
