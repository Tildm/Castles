var mongoose = require("mongoose");

var furniturSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Name cant be blank"
  },
  image: String,
  text: String,
  vote: Number,
  completed: {
    type: Boolean,
    default: false
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

var Furnitur = mongoose.model("Furnitur", furniturSchema);
module.exports = Furnitur;
