const server = require("./api/server.js");
const mongoose = require("mongoose");

const url = `mongodb+srv://chukalicious:w7amc6C35dCMWiOP@cluster0.ueh6vxn.mongodb.net/places?retryWrites=true&w=majority`;

const port = 4000;

mongoose
  .connect(url)
  .then(() => {
    server.listen(port, () =>
      console.log(`*** API running on port ${port} ***`)
    );
  })
  .catch((err) => {
    console.log("Error connecting to the database", err);
  });
