// Import Packages
const express = require('express')
const router = express.Router()

// Create POST controller
router.post('/', async (req, res) => {
  res.render('houses/list')
})

// Create GET controller
router.get('/', async (req, res) => {
  res.render('houses/list')
})

router.get('/create', async (req, res) => {
  res.render('houses/create')
})

router.get('/:id', async (req, res) => {
  res.render('houses/one')
})

router.get('/:id/edit', async (req, res) => {
  res.render('houses/edit')
})

// Create PATCH controller
router.patch('/:id', async (req, res) => {
  res.render('houses/one')
})

// Create DELETE controller
router.delete('/:id', async (req, res) => {
  res.render('houses/one')
})

// Views
// Create here a controller that accepts GET requests and renders the "search" page

// Export module
module.exports = router
