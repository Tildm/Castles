var mongoose = require("mongoose");
mongoose.set("debug", true);
// mongoose.connect("mongodb://localhost/castle");
mongoose.connect("mongodb+srv://Istvan:Depeche75@cluster0-5d6il.mongodb.net/test?retryWrites=true&w=majority");

mongoose.Promise = Promise;

module.exports.Castle = require("./castle");
