const moongose = require('mongoose')

const users = moongose.model('users', {
    name: String,
    username: String,
    password: String,
})

module.exports = users