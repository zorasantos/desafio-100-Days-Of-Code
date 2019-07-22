import React from 'react'
import styled from 'styled-components'
import { Button, Grid } from '@material-ui/core'
import { ReactComponent as MainLogo } from './logo.svg'

const Login = () => (
  <Container>
    <Grid container justify='center' spacing={8}>
      <Grid item >
        <Logo />
      </Grid>

      <Grid item xs={12} container justify='center'>
        <GithubButton>
          Entrar com Github
        </GithubButton>
      </Grid>
    </Grid>
  </Container>
)

const Container = styled.div`
  padding: 40px;
`
const Logo = styled(MainLogo)`
  width: 100%;
`
const GithubButton = styled(Button).attrs({
  variant: 'contained',
  fullWidth: true
})`
  && {
    font-size: 25px;
    max-width: 480px;
    padding: 12px;
    text-transform: none;
  }
`
export default Login
