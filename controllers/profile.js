// Import Packages
const express = require('express')
const router = express.Router()

// Create POST controller

// Create GET controller
router.get('/', async (req, res) => {
  res.render('houses/profile')
})

// Create PATCH controller
router.patch('/', async (req, res) => {
  res.render('houses/one')
})

// Create DELETE controller

// Views
// Create here a controller that accepts GET requests and renders the "search" page

// Export module
module.exports = router
