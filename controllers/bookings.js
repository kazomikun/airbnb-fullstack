// Import Packages
const express = require('express')
const router = express.Router()

// Create POST controller
router.post('/', async (req, res) => {
  if (req.isAuthenticated()) {
  } else {
    res.redirect('/auth/login')
  }
})

// Create GET controller

// Create PATCH controller

// Create DELETE controller

// Views
// Create here a controller that accepts GET requests and renders the "search" page

// Export module
module.exports = router
