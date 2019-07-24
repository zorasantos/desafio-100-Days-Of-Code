import React, { useContext } from 'react'
import styled from 'styled-components'
import { Button, Grid } from '@material-ui/core'
import { AuthContext } from '../../contexts/auth'
import { ReactComponent as MainLogo } from './logo.svg'

function Login () {
  const { login } = useContext(AuthContext)

  return (
    <Container>
      <Grid container justify='center' spacing={8}>
        <Grid item >
          <Logo />
        </Grid>

        <Grid item xs={12} container justify='center'>
          <FacebookButton onClick={login}>
            Entrar com Facebook
          </FacebookButton>
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
