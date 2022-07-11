// Import Packages
const express = require('express')
const router = express.Router()

// Create POST controller
router.post('/login', async (req, res) => {
  res.send('Hello from auth')
})

router.post('/signup', async (req, res) => {
  res.send('Hello from auth')
})

// Create GET controller
router.get('/login', async (req, res) => {
  res.send('Hello from auth')
})

router.get('/signup', async (req, res) => {
  res.send('Hello from auth')
})

router.get('/logout', async (req, res) => {
  res.send('Hello from auth')
})

// Create PATCH controller

// Create DELETE controller

// Views
// Create here a controller that accepts GET requests and renders the "search" page

// Export module
module.exports = router
