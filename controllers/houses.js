// Import Packages
const express = require('express')
const router = express.Router()
const Houses = require('../models/houses')

// Create POST controller
router.post('/', async (req, res, next) => {
  if (req.isAuthenticated()) {
    // console.log(req.body)
    // console.log(req.user)

    req.body.host = req.user._id
    // console.log(req.body)
    let house = await Houses.create(req.body)
    console.log(house._id)
    res.redirect('houses/id=' + house._id)
  } else {
    res.redirect('/auth/login')
  }
})

// Create GET controller
router.get('/', async (req, res) => {
  let user = req.user
  console.log('hi there')
  console.log(user)
  res.render('houses/list', { user })
})

router.get('/create', async (req, res) => {
  if (req.isAuthenticated()) {
    res.render('houses/create')
  } else {
    res.redirect('/auth/login', { user })
  }
})

router.get('/:id', async (req, res) => {
  res.render('houses/one')
})

router.get('/:id/edit', async (req, res) => {
  if (req.isAuthenticated()) {
    res.render('houses/edit', { user })
  } else {
    res.redirect('/auth/login', { user })
  }
})

// Create PATCH controller
router.patch('/:id', async (req, res) => {
  if (req.isAuthenticated()) {
    res.render('houses/one')
  } else {
    res.redirect('/auth/login')
  }
})

// Create DELETE controller
router.delete('/:id', async (req, res) => {
  if (req.isAuthenticated()) {
    res.render('houses/one')
  } else {
    res.redirect('/auth/login')
  }
})

// Views
// Create here a controller that accepts GET requests and renders the "search" page

// Export module
module.exports = router
