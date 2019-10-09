const mongoose = require('mongoose')

const DailyEvent = mongoose.model('DailyEvent', {
  title: String,
  picture: String,
  information: String,
  month: String,
  times: String,
  timesWeekend: String
})

module.exports = DailyEvent
