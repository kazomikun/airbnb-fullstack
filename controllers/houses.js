// Import Packages
const express = require('express')
const router = express.Router()

// Create POST controller
router.post('/', async (req, res) => {
  res.send('Hello from auth')
})

// Create GET controller
router.get('/', async (req, res) => {
  res.render('houses/list')
})

router.get('/create', async (req, res) => {
  res.send('Hello from auth')
})

router.get('/:id', async (req, res) => {
  res.send('Hello from auth')
})

router.get('/:id/edit', async (req, res) => {
  res.send('Hello from auth')
})

// Create PATCH controller
router.patch('/:id', async (req, res) => {
  res.send('Hello from auth')
})

// Create DELETE controller
router.delete('/:id', async (req, res) => {
  res.send('Hello from auth')
})

// Views
// Create here a controller that accepts GET requests and renders the "search" page

// Export module
module.exports = router
