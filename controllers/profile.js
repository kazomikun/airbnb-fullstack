// Import Packages
const express = require('express')
const router = express.Router()

// Create POST controller

// Create GET controller
router.get('/', async (req, res) => {
  if (req.isAuthenticated()) {
    res.render('houses/profile')
  } else {
    res.redirect('/auth/login')
  }
})

// Create PATCH controller
router.patch('/', async (req, res) => {
  if (req.isAuthenticated()) {
    res.render('houses/one')
  } else {
    res.redirect('/auth/login')
  }
})

// Create DELETE controller

// Views
// Create here a controller that accepts GET requests and renders the "search" page

// Export module
module.exports = router
