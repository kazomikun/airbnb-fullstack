// Import Packages
const express = require('express')
const router = express.Router()
const Users = require('../models/users')
const Houses = require('../models/houses')

// Create POST controller

// Create GET controller
router.get('/', async (req, res) => {
  try {
    if (req.isAuthenticated()) {
      let user = req.user

      let myHouses = await Houses.find({
        host: req.user._id
      })
      console.log(myHouses)
      console.log('hello')
      res.render('profile', { user, myHouses })
    } else {
      res.redirect('/auth/login')
    }
  } catch (err) {
    next(err)
  }
})

// Create PATCH controller
router.patch('/', async (req, res, next) => {
  try {
    // console.log(req.user)
    // everything inside try
    if (req.isAuthenticated()) {
      // let newUser = {
      //   email: req.user.email,
      //   password: req.user.password
      // }

      // you need the new user here
      let newUser = await Users.findByIdAndUpdate(req.user._id, req.body, {
        new: true
      })

      req.login(newUser, err => {
        if (err) {
          throw err
        } else {
          // console.log('login ok')
          res.redirect('/profile')
        }
      })
    } else {
      res.redirect('/auth/login')
    }
  } catch (err) {
    next(err)
  }
})

// Create DELETE controller

// Views
// Create here a controller that accepts GET requests and renders the "search" page

// Export module
module.exports = router
