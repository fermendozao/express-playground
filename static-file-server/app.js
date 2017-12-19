var express = require("express");
var morgan = require("morgan");
var path = require("path");
var fs = require("fs");

var app = express();
app.use(morgan("short"));

var staticPath = path.join(__dirname, "static");
app.use(express.static(staticPath));

app.get(/^\/users\/(\d+)$/, function(req, res) {
  // parse paramenter as int
  var userId = parseInt(req.params[0], 10);
  res.end("Valid user: " + userId);
})

app.use(function(req, res) {
  res.status(404);
  res.send("File not found");
})

app.listen(3000, function() {
  console.log("App started on port 3000");
})