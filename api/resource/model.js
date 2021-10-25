// build your `Resource` model here
const db = require('../../data/dbConfig')

function get() {
    return db('resources')
}

function insert(resource) {
    return db('resources').insert(resource)
}

module.exports = {
    get,
    insert
}