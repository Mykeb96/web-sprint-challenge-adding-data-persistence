// build your `/api/projects` router here
const express = require('express')
const model = require('./model')

const router = express.Router()

router.get('/', (req, res) => {
    model.get()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
})

router.post('/', (req, res) => {
    const project = req.body
    model.insert(project)
        .then(resolution => {
            res.status(200).json({ message: 'Succesfully inserted!' })
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
})

module.exports = router