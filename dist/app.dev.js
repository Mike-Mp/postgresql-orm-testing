"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.get("/", function (req, res) {
  res.send({
    message: "Welcome to do api"
  });
});
var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log("app is listening on port ".concat(port));
});