// Import Packages
const express = require('express')
const router = express.Router()
const Users = require('../models/users')
const bcrypt = require('bcryptjs')

// Create POST controller
router.post('/login', async (req, res, next) => {
  // console.log('starting')
  try {
    // console.log('start try')
    //see if user exists in database
    let newUser = await Users.findOne({
      email: req.body.email,
      password: req.body.password
    })
    // console.log(newUser)
    // throw error if user does not exist
    if (newUser) {
      req.login(newUser, err => {
        if (err) {
          throw err
        } else {
          // console.log('login ok')
          res.redirect('/houses')
        }
      })
    } else {
      throw new Error('Email or Password is incorrect, please try again')
    }
  } catch (err) {
    next(err)
  }

  //res.render('login')
})

router.post('/signup', async (req, res, next) => {
  // console.log(req.body)
  let hashed
  try {
    // check if user exists
    let foundUser = await Users.findOne({
      email: req.body.email,
      password: req.body.password
    })

    if (foundUser) {
      throw new Error('Email aleady exists, please login to your account')
    }
    // bcrypt.hash(req.body.password, 10).then(hashed => {})
    // console.log(hashed)
    let user = await Users.create({
      name: req.body.name,
      avatar: req.body.avatar,
      email: req.body.email,
      password: req.body.password
    })

    // console.log(user)
    // req.login(user)

    req.login(user, err => {
      if (err) {
        throw err
      } else {
        // console.log('ok')
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
  // console.log('start logout')
  req.logout()
  // console.log('destroy session')
  req.session.destroy(err => {
    if (err) {
      next(err)
    }
    // console.log('clear cookies')
    res.clearCookie('connect.sid')
    // console.log('redirect to login')
    res.redirect('/auth/login')
  })
})

// Create PATCH controller

// Create DELETE controller

// Views
// Create here a controller that accepts GET requests and renders the "search" page

// Export module
module.exports = router
