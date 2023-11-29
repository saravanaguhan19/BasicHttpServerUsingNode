const express = require("express");

const PORT = 3000;

const app = express();

const mylogger = (req, res, next) => {
  console.log("logging from first middleware 1");
  next(); //calls the next middleware
};

const extlogger = (req, res, next) => {
  console.log("logging from first middleware 2");
  return res.json({
    name: "saravana",
  });
  next(); //calls the next middleware
};

app.get("/home", mylogger, extlogger, (request, response) => {
  console.log("last middleware");
  response.send("hi there , welcome to get");
});

app.post("/home", (request, response) => {
  response.send("hi there , welcome to post");
});
app.post("/saravana", (request, response) => {
  // response.send("hi there , welcome to post");
  response.json({
    message: "success",
    name: "saravana",
    company: "zoho",
    age: 26,
  });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
