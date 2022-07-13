const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

// create the users model

module.exports = mongoose.model('reviews', {
  author: {
    type: ObjectId,
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
    type: ObjectId,
    required: true,
    ref: 'houses'
  },
  rating: {
    type: Number,
    required: true
  }
})

// module.exports = Reviews
