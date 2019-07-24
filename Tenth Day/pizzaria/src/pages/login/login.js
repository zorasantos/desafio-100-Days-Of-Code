import React, { useState, useContext, useEffect, useCallback } from 'react'
import firebase from '../../services/firebase'
import styled from 'styled-components'
import { Button, Grid } from '@material-ui/core'
import { ReactComponent as MainLogo } from './logo.svg'
import { ColorContext } from '../../app'

function Login () {
  const [userInfo, setUserInfo] = useState({
    isUserLoggedIn: false,
    user: null
  })
  const { isUserLoggedIn, user } = userInfo

  const { color, setColor } = useContext(ColorContext)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log('Dados do usuario:', user)
      setUserInfo({
        isUserLoggedIn: !!user,
        user
      })
    })
  }, [])

  const login = useCallback(() => {
    const provider = new firebase.auth.FacebookAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  }, [])

  const logout = useCallback(() => {
    firebase.auth().signOut().then(() => {
      console.log('Deslogou')
      setUserInfo({
        isUserLoggedIn: false,
        user: null
      })
    })
  }, [])

  return (
    <Container>
      <Grid container justify='center' spacing={8}>
        <Grid item >
          <Logo />
        </Grid>

        <Grid item xs={12} container justify='center'>
          {isUserLoggedIn && (
            <>
              <pre>{user.displayName}</pre>
              <Button variant='contained' onClick={logout}>
                Sair
              </Button>
            </>
          )}
          {!isUserLoggedIn && (
            <>
              <FacebookButton onClick={login}>
                  Entrar com Facebook ({color})
              </FacebookButton>
              <button onClick={() => setColor('blue')}>Cor Azul</button>
            </>
          )}
        </Grid>
      </Grid>
    </Container>
  )
}

const Container = styled.div`
  padding: 40px;
`
const Logo = styled(MainLogo)`
  width: 100%;
`
const FacebookButton = styled(Button).attrs({
  variant: 'contained',
  color: 'primary',
  fullWidth: true
})`
  && {
    font-size: 21px;
    max-width: 480px;
    padding: 12px;
    text-transform: none;
  }
`
export default Login
