import React, { PureComponent } from 'react'
import styled from 'styled-components'
import firebase from 'firebase/app'
import 'firebase/auth'
import { Button, Grid } from '@material-ui/core'
import { ReactComponent as MainLogo } from './logo.svg'

var firebaseConfig = {
  apiKey: 'AIzaSyBrPX8VAI0rSfke6iViWTmLHf1HhRBwHZE',
  authDomain: 'zora-pizzaria.firebaseapp.com',
  databaseURL: 'https://zora-pizzaria.firebaseio.com',
  projectId: 'zora-pizzaria',
  storageBucket: '',
  messagingSenderId: '886846004460',
  appId: '1:886846004460:web:4afb653c74b9e052'
}

firebase.initializeApp(firebaseConfig)

class Login extends PureComponent {
  state = {
    isUserLoggedIn: false,
    user: null
  }

  componentDidMount () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('Usuario logado', user)
        this.setState({
          isUserLoggedIn: true,
          user
        })
      } else {
        console.log('Usuario não esta logado, user')
        this.setState({
          isUserLoggedIn: false,
          user: null
        })
      }
    })
  }

  render () {
    const { isUserLoggedIn, user } = this.state

    return (
      <Container>
        <Grid container justify='center' spacing={8}>
          <Grid item >
            <Logo />
          </Grid>

          <Grid item xs={12} container justify='center'>
            {isUserLoggedIn && (
              <>
                <pre>{JSON.stringify(user, null, 2)}</pre>
                <Button variant='contained'>
                  Sair
                </Button>
              </>
            )}
            {!isUserLoggedIn && (
              <FacebookButton onClick={() => {
                const provider = new firebase.auth.FacebookAuthProvider()
                firebase.auth().signInWithRedirect(provider)
              }}>
                  Entrar com Facebook
              </FacebookButton>
            )}
          </Grid>
        </Grid>
      </Container>
    )
  }
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
