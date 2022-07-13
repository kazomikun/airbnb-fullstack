const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

// create the users model

module.exports = mongoose.model('users', {
  avatar: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

// module.exports = Users
