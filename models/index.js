var mongoose = require("mongoose");
mongoose.set("debug", true);
// mongoose.connect("mongodb://localhost/furnitur");
mongoose.connect("mongodb+srv://Istvan:depeche@clusteradvfurnit-m2yvl.mongodb.net/test?retryWrites=true&w=majority");

mongoose.Promise = Promise;

module.exports.Furnitur = require("./furnitur");
