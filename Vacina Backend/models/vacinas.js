const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Vacina = new Schema({
    nome: {
        type: String,
        required: true
    },
    dose: {
        type: String,
        required: true
    },
    data: {
        type: String,
        required: true
    }
})

mongoose.model('vacinas', Vacina)