const express = require("express");
const morgan = require('morgan');

// express app
const app = express();

const dbURI = 'mongodb+srv://tejasst0544:Mongo44@cluster0.jjf6s6z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

// register view engine
app.set("view engine", "ejs");

// listen for requests
app.listen(3000);

// middleware and static files
app.use(express.static('public')) // pass a folder for any files inside to be made accesible to the front end
app.use(morgan('dev')); // using middleware to log info to the console about the request made

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "Yoshi finds eggs",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Mario finds stars",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "How to defeat bowser",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
  ];
  res.render("index", { title: "Home", blogs: blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
