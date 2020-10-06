var express = require("express");
var fileUpload = require("express-fileupload");
var bodyParser = require("body-parser");
const api = require("./routes/api");
var path = require("path");
var cors = require("cors");

var app = express();
var server = require("http").Server(app);
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(fileUpload());
app.use("/api", api);

var port = process.env.PORT || 8080;
app.set("port", port);
server.listen(port, () => console.log(`Listening on port ${port}`));
