// simple-server-mvc
const express = require("express");
let app = express();
//Port to listen on
const PORT = 3000;

const path = require("path");

const bodyParser = require("body-parser");

const bootstrap = require("./src/boostrap");

//Use pug as Templating Engine
app.set("view engine", "pug");

app.set("views", path.resolve("./src/views"));

//Request Parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//Create Express Router
const router = express.Router();
app.use(router);

const rootPath = path.resolve("./public");
app.use(express.static(rootPath));

bootstrap(app, router);

//Main Page (Home)
router.get("/", (req, res, next) => {
  return res.render('home', {});
});

router.use((err, req, res, next) => {
  if (err) {
    //Handle file type and max size of image
    return res.send(err.message);
  }
});

app.listen(PORT, err => {
  if (err) return console.log(`Cannot Listen on PORT: ${PORT}`);
  console.log(`Server is Listening on port: ${PORT}`);
});
