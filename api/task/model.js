// build your `Task` model here
const db = require('../../data/dbConfig')

function get() {
    return db('tasks')
}

function insert(task) {
    return db('tasks').insert(task)
}

module.exports = {
    get,
    insert
}