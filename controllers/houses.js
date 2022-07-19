// Import Packages
const express = require('express')
const router = express.Router()
const Houses = require('../models/houses')

// Create POST controller
router.post('/', async (req, res, next) => {
  if (req.isAuthenticated()) {
    // console.log(req.body)
    // console.log(req.user)

    // console.log(req.body.photos)
    let filteredPhotos = req.body.photos.filter(n => n != '')
    req.body.photos = filteredPhotos
    // console.log(req.body.photos)

    //console.log(req.body)

    req.body.host = req.user._id
    // console.log(req.body)

    let house = await Houses.create(req.body)
    // console.log(house._id)
    res.redirect('houses/' + house._id)
  } else {
    res.redirect('/auth/login')
  }
})

// Create GET controller
router.get('/', async (req, res) => {
  let user = req.user

  console.log(req.body)
  console.log(req.query)

  let q = req.query

  if (q.location == 'Any Location') {
    delete q.location
  }

  if (q.rooms == 'Any rooms') {
    delete q.rooms
  }

  if (q.price != '') {
    q.price = {
      $lt: q.price
    }
  } else {
    delete q.price
  }

  // if (q.title == '') {
  // 	delete q.title
  // }

  req.query = q

  let houses = await Houses.find(req.query).sort('-price')

  res.render('houses/list', { houses, user })
})

router.get('/create', async (req, res) => {
  if (req.isAuthenticated()) {
    res.render('houses/create')
  } else {
    res.redirect('/auth/login', { user })
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    let house = await Houses.findById(req.params.id).populate('host')
    res.render('houses/one', { house, user: req.user })
  } catch (err) {
    next(err)
  }
})

router.get('/:id/edit', async (req, res) => {
  if (req.isAuthenticated()) {
    user = req.user

    let house = await Houses.findById(req.params.id)
    //console.log(house)

    res.render('houses/edit', { user, house })
  } else {
    res.redirect('/auth/login')
  }
})

// Create PATCH controller
router.patch('/:id', async (req, res, next) => {
  console.log('hello edit house')
  console.log(req.body)
  try {
    let houseId = req.params.id
    // console.log(req.user)
    // everything inside try
    if (req.isAuthenticated()) {
      let filteredPhotos = req.body.photos.filter(n => n != '')
      req.body.photos = filteredPhotos

      await Houses.findByIdAndUpdate(houseId, req.body)

      res.redirect('/houses/' + houseId)
    } else {
      res.redirect('/auth/login')
    }
  } catch (err) {
    next(err)
  }
})

// Create DELETE controller
router.delete('/:id', async (req, res) => {
  if (req.isAuthenticated()) {
    res.render('houses/one/')
  } else {
    res.redirect('/auth/login')
  }
})

// Views
// Create here a controller that accepts GET requests and renders the "search" page

// Export module
module.exports = router
