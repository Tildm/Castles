var mongoose = require("mongoose");

var castleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Name cant be blank"
  },
  image: String,
  text: String,
  completed: {
    type: Boolean,
    default: false
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

var Castle = mongoose.model("Castle", castleSchema);
module.exports = Castle;
