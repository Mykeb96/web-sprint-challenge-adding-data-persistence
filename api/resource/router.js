// build your `/api/resources` router here
const express = require('express')
const model = require('./model')

const router = express.Router()

router.get('/', (req, res) => {
    model.get()
    .then(resources => {
        res.status(200).json(resources)
    })
    .catch(err => {
        res.status(400).json({ message: err.message })
    })
})

router.post('/', (req, res) => {
    const resource = req.body
    model.insert(resource)
        .then(resolution => {
            res.status(200).json({ message: 'Succesfully inserted!' })
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
})

module.exports = router