// Import Packages
const express = require('express')
const router = express.Router()
const Users = require('../models/users')

// Create POST controller
router.post('/login', async (req, res) => {
  res.render('login')
})

router.post('/signup', async (req, res, next) => {
  // console.log(req.body)

  try {
    // check if user exists
    let foundUser = await Users.findOne({
      email: req.body.email,
      password: req.body.password
    })

    if (foundUser) {
      throw new Error('Email aleady exists, please login to your account')
    }

    let user = await Users.create(req.body)
    // console.log(user)
    // req.login(user)

    req.login(user, err => {
      if (err) {
        throw err
      } else {
        console.log('ok')
        res.redirect('/houses')
      }
    })
  } catch (err) {
    next(err)
  }
  // res.red('signup')
})

// Create GET controller
router.get('/login', async (req, res) => {
  res.render('login')
})

router.get('/signup', async (req, res) => {
  res.render('signup')
})

router.get('/logout', async (req, res) => {
  res.redirect('houses/list')
})

// Create PATCH controller

// Create DELETE controller

// Views
// Create here a controller that accepts GET requests and renders the "search" page

// Export module
module.exports = router
