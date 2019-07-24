import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import firebase from 'firebase/app'
import 'firebase/auth'
import { Button, Grid } from '@material-ui/core'
import { ReactComponent as MainLogo } from './logo.svg'

const firebaseConfig = {
  apiKey: 'AIzaSyBrPX8VAI0rSfke6iViWTmLHf1HhRBwHZE',
  authDomain: 'zora-pizzaria.firebaseapp.com',
  databaseURL: 'https://zora-pizzaria.firebaseio.com',
  projectId: 'zora-pizzaria',
  storageBucket: '',
  messagingSenderId: '886846004460',
  appId: '1:886846004460:web:4afb653c74b9e052'
}

firebase.initializeApp(firebaseConfig)

const login = () => {
  const provider = new firebase.auth.FacebookAuthProvider()
  firebase.auth().signInWithRedirect(provider)
}

function Login () {
  const [userInfo, setUserInfo] = useState({
    isUserLoggedIn: false,
    user: null
  })

  const { isUserLoggedIn, user } = userInfo

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log('Dados do usuario:', user)
      setUserInfo({
        isUserLoggedIn: !!user,
        user
      })
    })
  }, [])

  const logout = () => {
    firebase.auth().signOut().then(() => {
      console.log('Deslogou')
      setUserInfo({
        isUserLoggedIn: false,
        user: null
      })
    })
  }

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
            <FacebookButton onClick={login}>
                Entrar com Facebook
            </FacebookButton>
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
