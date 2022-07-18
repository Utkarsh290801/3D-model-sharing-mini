const express = require("express");
const app = express();
const port = 5000;
const userRouter = require("./router/userRouter");
const threeDRouter = require("./router/threeDRouter");
app.use("/user", userRouter);
app.use("/3dmodel", threeDRouter);
app.get("/home", (req, res) => {
    res.send("hello express");
  });
  app.listen(port,() => {
    console.log("the server has been started");
  });