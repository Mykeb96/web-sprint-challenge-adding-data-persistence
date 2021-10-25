// build your `/api/tasks` router here
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
    const task = req.body
    model.insert(task)
        .then(resolution => {
            res.status(200).json({ message: 'Succesfully inserted!' })
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
})

module.exports = router