var mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.connect("mongodb://localhost/castle");

mongoose.Promise = Promise;

module.exports.Castle = require("./castle");
