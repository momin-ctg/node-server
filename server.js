// Connecting with MongoDB native driver

const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017";

const dbName = "game-of-thrones";
let db;

MongoClient.connect(
  url,
  { useNewUrlParser: true },
  (err, client) => {
    if (err) return console.log(err);

    db = client.db(dbName);
    console.log(`Connected MongoDB: ${url}`);
    console.log(`Database: ${dbName}`);
  }
);

// Connecting with Mongoose

// const mongoose = require("mongoose");
// const url = "mongodb://127.0.0.1:27017/game-of-thrones";
// mongoose.connect(url, { useNewUrlParser: true });

// const db = mongoose.connection;

// db.once("open", _ => {
//   console.log("Database Connected: ", url);
// });

// db.on("error", err => {
//   console.error("connection error:", err);
// });
