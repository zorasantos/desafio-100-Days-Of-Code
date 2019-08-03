const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require('../models/vacinas')
const Vacina = mongoose.model('vacinas')

router.get('/vacinas', (req, res) => {
    res.send('Pagina de vacinas')
})
router.post('/vacinas/nova', (req, res) => {
    const novaVacina = {
        nome: req.body.nome,
        dose: req.body.dose,
        data: req.body.data
    }
    new Vacina(novaVacina).save().then(() => {
        console.log('Vacinação salva com sucesso!')
    }).catch(() => {
        console.log('Erro ao tentar salvar va cinação!')
    })
})

module.exports = router