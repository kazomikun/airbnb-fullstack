const mongoose = require('mongoose')

// create the users model

let Bookings = mongoose.model('bookings', {
  author: {
    type: ObjectID,
    required: true,
    ref: 'users'
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  description: {
    type: String,
    required: true
  },
  house: {
    type: ObjectID,
    required: true,
    ref: 'houses'
  }
})

module.exports = Bookings
