const mongoose = require('mongoose')

// create the users model

let Houses = mongoose.model('houses', {
  description: {
    type: String,
    required: true
  },
  host: {
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

module.exports = Houses
