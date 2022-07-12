// Import Packages
const express = require('express')
const router = express.Router()
const Users = require('../models/users')

// Create POST controller
router.post('/login', async (req, res) => {
  res.render('login')
})

router.post('/signup', async (req, res) => {
  console.log(req.body)

  await Users.create(req.body)
  // console.log(user)
  res.render('signup')
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
