const express = require("express");
const port = 8000;
const expressLayout = require("express-ejs-layouts");
const app = express();

//used to connect to the database
const db = require("./config/mongoose");

app.use(express.urlencoded());

app.use(express.static("./asserts"));
app.use(expressLayout);
//extract style and scripts from subpages

app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

//middlieware
app.use("/", require("./routes"));
//set up view engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(port, function (err) {
  if (err) {
    console.log("cannot be connected");
    return;
  }
  console.log(`Server is running :${port}`);
});
