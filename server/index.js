// grab the packages we need
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
const port = 8080;

app.get("/api/values", (req, res) => {
  res.send({
    some: "dsfsdfsdf"
  });
});

// start the server
app.listen(port);
console.log("Server started! At http://localhost:" + port);
