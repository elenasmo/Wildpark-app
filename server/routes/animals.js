const router = require('express').Router()
const Animal = require('../models/Animal')

router.get('/', (req, res) => {
  Animal.find()
    .then(animals => res.json(animals))
    .catch(err => res.json(err))
})

router.get('/:id', (req, res) => {
  Animal.find({ id: req.params.id })
    .then(animals => res.json(animals))
    .catch(err => res.json(err))
})

router.post('/', (req, res) => {
  Animal.create(req.body)
    .then(animal => res.json(animal))
    .catch(err => res.json(err))
})

router.patch('/:id', (req, res) => {
  Animal.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(animal => res.json(animal))
    .catch(err => res.json(err))
})

router.delete('/:id', (req, res) => {
  Animal.findByIdAndDelete(req.params.id)
    .then(animal => res.json(animal))
    .catch(err => res.json(err))
})

module.exports = router
