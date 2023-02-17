const express = require("express");
const bodyParser = require("body-parser");

// import routers here

const server = express();
server.use(bodyParser.json());

// implement routers here
// server.use("/api/notes", notesRouter); for example

server.get("/", (req, res) => {
  res.send("Hello from Express");
});

module.exports = server;
