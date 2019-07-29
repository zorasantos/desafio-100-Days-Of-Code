import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

const RegisterVideo = ({ onSubmit }) => (
    <Form onSubmit={onSubmit}>
        <h2>Cadastrar Video</h2>

        <label htmlFor='id'>ID do video:</label>
        <input type='text' id='id' name='id' />

        <label htmlFor='title'>Titulo do video:</label>
        <input type='text' id='title' name='title' />

        <button type='submit'>Cadastrar</button>
    </Form>
)

const Form = styled.form`
    padding: 10px;
`

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (e) => {
        e.preventDefault()
    }
})

export default connect(null, mapDispatchToProps)(RegisterVideo)