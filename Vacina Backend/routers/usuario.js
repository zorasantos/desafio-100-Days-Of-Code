const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require('../models/usuarios')
const Usuario = mongoose.model('usuarios')

router.get('/usuario', (req, res) => {
    res.send('Pagina de usuarios')
})

router.post('/usuario/novo', (req, res) => {
    const novoUsuario = {
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha
    }
    new Usuario(novoUsuario).save().then(() => {
        console.log('Novo usuario registrado com sucesso!')
    }).catch(() => {
        console.log('Erro ao tentar salvar novo usuario!')
    })
})
module.exports = router