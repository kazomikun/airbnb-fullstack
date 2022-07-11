const mongoose = require('mongoose')

// create the users model

let Reviews = mongoose.model('reviews', {
  author: {
    type: ObjectID,
    required: true,
    ref: 'users'
  },
  location: {
    type: String,
    required: true
  },
  photos: [
    {
      type: String
    }
  ],
  price: {
    type: Number,
    required: true
  },
  rooms: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})

module.exports = Reviews
