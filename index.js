const express = require("express");

const PORT = 3000;

const app = express();

app.get("/home", (request, response) => {
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
