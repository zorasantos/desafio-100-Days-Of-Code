const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
require('./models/vacinas')
const Vacina = mongoose.model('vacinas')


//Configuração bodyParser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//Mongoose
mongoose.Promisse = global.Promise;
mongoose.connect('mongodb://localhost/blogapp', { useNewUrlParser: true }).then(() => {
    console.log('Conectado ao mongo')
}).catch(() => {
    console.log('Erro ao tentar se conectar com o mongo')
})

//Configuração aerquivos estaticos, Pasta Public
app.use(express.static(path.join(__dirname, 'public')))

//Rotas

app.get('/', (req, res) => {
    res.send('Server running in PORT 8081')
})

const PORT = process.env.PORT || 8081
app.listen(PORT, () => {
    console.log('Server running in PORT 8081')
})