const express = require("express");
const app = express();
const mongoose = require("mongoose");

const bodyParser = require("body-parser");

const indexRoute = require("./routes/index.js");

if (process.env.NODE_ENV == "production") {
  mongoose.connect(
    "mongodb://gift_run_admin:dbadmin1@ds155073.mlab.com:55073/gift-run",
    { useNewUrlParser: true }
  );
} else {
  mongoose.connect(
    "mongodb://localhost/Gift_RUN",
    { useNewUrlParser: true }
  );
}
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json"
  );
  next();
});

app.use("/run", indexRoute);

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
