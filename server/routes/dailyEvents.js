const router = require('express').Router()
const DailyEvent = require('../DailyEvent')

router.get('/', (req, res) => {
  DailyEvent.find()
    .then(events => res.json(events))
    .catch(err => res.json(err))
})

router.get('/:id', (req, res) => {
  DailyEvent.find({ id: req.params.id })
    .then(events => res.json(events))
    .catch(err => res.json(err))
})

router.post('/', (req, res) => {
  DailyEvent.create(req.body)
    .then(event => res.json(event))
    .catch(err => res.json(err))
})

router.patch('/:id', (req, res) => {
  DailyEvent.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(event => res.json(event))
    .catch(err => res.json(err))
})

router.delete('/:id', (req, res) => {
  DailyEvent.findByIdAndDelete(req.params.id)
    .then(event => res.json(event))
    .catch(err => res.json(err))
})

module.exports = router
