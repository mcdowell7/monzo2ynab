const config = require(config);
const express = require("express");
const PORT = config.port;

express()
  .get("/", (req, res) => res.send("Hello!"))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
