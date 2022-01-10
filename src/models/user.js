const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowsercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8
    },
    age: {
        type: String
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User