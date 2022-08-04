const express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
const app = express();
var mongoose = require("mongoose");
const port = 3001;

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());

let blogsSchema = require("./models/blogs-model");
let commentsSchema = require("./models/comments-model");

//Set up default mongoose connection
var mongoDB = "mongodb://localhost:27017/blogging-db";

mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

app.listen(port, () => {
  console.log(`App is Listening to Port :: ${port}!`);
});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// post a blogs
// /blogs

app.post("/blogs", (req, res) => {
  blogsSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// get all blogs
// /blogs

app.get("/blogs", (req, res) => {
  db.collection("blogs")
    .find({})
    .toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
});

// post a comment
// /blogId/comments
app.post("/:id/comments", (req, res, next) => {
  console.log("Here===>", req.body);
  commentsSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// get all comments of related blogId
// /blogId/comments

app.get("/:id/comments", (req, res, next) => {
  db.collection("blog-comments")
    .find({ blogId: req.params.id })
    .toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
});

// respond with "hello world" when a GET request is made to the homepage
app.get("/", (req, res) => {
  res.send("hello world");
});
