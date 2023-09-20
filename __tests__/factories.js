const { factory } = require('factory-girl')
const { User } = require('../src/app/models')

factory.define('User', User, {
    name: "Teste",
    email: 'teste@mail.com',
    password:'123456'
})

module.exports = factory