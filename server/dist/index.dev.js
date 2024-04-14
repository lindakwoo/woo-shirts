"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));

var _db = _interopRequireDefault(require("./db.js"));

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _path = _interopRequireDefault(require("path"));

var _productRoutes = _interopRequireDefault(require("./routes/productRoutes.js"));

var _userRoutes = _interopRequireDefault(require("./routes/userRoutes.js"));

var _stripeRoute = _interopRequireDefault(require("./routes/stripeRoute.js"));

var _orderRoutes = _interopRequireDefault(require("./routes/orderRoutes.js"));

var _ideaRoutes = _interopRequireDefault(require("./routes/ideaRoutes.js"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

(0, _db["default"])();
var app = (0, _express["default"])();
app.use(_express["default"].json());
app.use((0, _cors["default"])());
app.use("/api/products", _productRoutes["default"]);
app.use("/api/users", _userRoutes["default"]);
app.use('/api/checkout', _stripeRoute["default"]);
app.use('/api/orders', _orderRoutes["default"]);
app.use('/api/ideas', _ideaRoutes["default"]);
app.get('/api/config/google', function (req, res) {
  return res.send(process.env.GOOGLE_CLIENT_ID);
}); // localhost:5555/api/products

var port = 5555;

var decode = function decode() {
  var linesArray = _fs["default"].readFileSync("server/textFile.txt").toString().split(String.fromCharCode(10));

  var numsArray = [];
  var obj = {};
  linesArray.forEach(function (line) {
    var tempArray = line.split(" ");
    obj[tempArray[0]] = tempArray[1];
    numsArray.push(Number(tempArray[0]));
  });
  numsArray.sort(function (a, b) {
    return a - b;
  });
  var step = 1;
  var pyramid = [];

  while (numsArray.length > 0) {
    var stepArray = numsArray.splice(0, step);
    pyramid.push(stepArray);
    step++;
  }

  var _final = "";
  pyramid.forEach(function (arr) {
    _final += " ".concat(obj[arr[arr.length - 1]]);
  });
};

decode();

var _dirname = _path["default"].resolve();

app.use('/uploads', _express["default"]["static"](_path["default"].join(_dirname, '/uploads')));

if (process.env.NODE_ENV == 'production') {
  app.use(_express["default"]["static"](_path["default"].join(_dirname, '/client/build')));
  app.get('*', function (req, res) {
    return res.sendFile(_path["default"].resolve(_dirname, 'client', 'build', 'index.html'));
  });
}

app.get("/", function (req, res) {
  res.send("Api is running!!!...");
});
app.listen(port, function () {
  console.log("Server running on port ".concat(port));
});