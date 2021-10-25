// build your `Project` model here
const db = require('../../data/dbConfig')

function get() {
    return db('projects')
}

function insert(project) {
    return db('projects').insert(project)
}

module.exports = {
    get,
    insert
}