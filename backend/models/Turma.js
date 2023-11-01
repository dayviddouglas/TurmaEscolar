const mongoose = require('mongoose')

const Turma = mongoose.model('Turma', {
    name: String,
    category: String,
    status: Boolean
})

// Call on Turma.js
module.exports = Turma;