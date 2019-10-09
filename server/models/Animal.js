const mongoose = require("mongoose")

const Animal = mongoose.model("Animal", {
  title: String,
  picture: String,
  station: Number,
  information: String,
  isLiked: Boolean
})

module.exports = Animal
