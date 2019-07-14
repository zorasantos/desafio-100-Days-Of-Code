mongoose = require('mongoose')
const Schema = mongoose.Schema;

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
        type: Number,
        required: true
    }
})

mongoose.model('vacinas', Vacina)