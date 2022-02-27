const mongoose = require('mongoose');

const Users = mongoose.model('users', {
    userName: String,
    password: String,
    admin: Boolean,
});

module.exports = Users;