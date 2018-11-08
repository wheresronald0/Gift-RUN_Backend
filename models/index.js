mongoose = require("mongoose");

let runSchema = mongoose.Schema({
  date: String,
  miles: String,
  totalTime: String,
  location: String,
  charity: String
});

module.exports = mongoose.model("Run", runSchema);
