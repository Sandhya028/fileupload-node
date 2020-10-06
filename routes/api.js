var express = require("express");
var fileUpload = require("express-fileupload");
var fs = require("fs");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
// information routes
eval(fs.readFileSync("routes/informationRoute.js") + "");
module.exports = router;
