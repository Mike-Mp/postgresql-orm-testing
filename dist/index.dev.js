"use strict";

var app = require("./app");

var PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
  console.log("app is listening on port ".concat(PORT));
});