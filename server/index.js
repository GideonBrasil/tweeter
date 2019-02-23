"use strict";

// Basic express setup:
// connect to mongodb
const {MongoClient} = require("mongodb"); // destructive assignment
const MONGODB_URI = "mongodb://localhost:27017/tweeter";
const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Connect to mongodb
MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.log(`Failed to connect: ${MONGODB_URI}`);
  }
  console.log(`Connected to: ${MONGODB_URI}`);

  const DataHelpers = require("./lib/data-helpers.js")(db);
  const tweetsRoutes = require("./routes/tweets")(DataHelpers);

  app.use("/tweets", tweetsRoutes);

  app.listen(PORT, () => {
    console.log("Example app listening on port " + PORT);
  });
});