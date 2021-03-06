import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import {
  AppBar,
  Toolbar as MaterialToolbar,
  Grid,
  IconButton,
  Typography,
  Menu,
  MenuItem } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import { ReactComponent as MainLogo } from '../../pages/login/logo.svg'
import { AuthContext } from '../../contexts/auth'

const MainPage = () => {
  const [anchorElement, setAnchorElement] = useState(null)
  const { userInfo, logout } = useContext(AuthContext)
  const userName = userInfo.user.displayName.split(' ')[0]

  const handleOpenMenu = (e) => {
    setAnchorElement(e.target)
  }

  const handleClose = () => {
    setAnchorElement(null)
  }

  return (
    <>
      <AppBar>
        <Toolbar>
          <LogoContainer>
            <Logo />
          </LogoContainer>

          <Typography color='inherit'>
            Ola {userName} =)
          </Typography>

          <IconButton color='inherit' onClick={handleOpenMenu}>
            <AccountCircle />
          </IconButton>

          <Menu open={!!anchorElement} onClose={handleClose} anchorEl={anchorElement}>
            <MenuItem onClick={logout}>
              Sair
            </MenuItem>
          </Menu>

        </Toolbar>
      </AppBar>

      <Content>
        <Grid container justfy='center'>
          <Grid item>
            <Typography variant='h3'>
              O que vai ser hoje, {userName}? =)
            </Typography>
          </Grid>
        </Grid>
      </Content>
    </>
  )
}

const Toolbar = styled(MaterialToolbar)`
  margin: 0 auto;
  max-width: 960px;
  width: 100%;
`
const LogoContainer = styled.div`
  flex-grow: 1
`

const Logo = styled(MainLogo)`
  height: 50px;
  width: 125px;

  & path {
    fill: #fff;
  }

  & line {
    stroke: #fff;
  }
`
const Content = styled.main`
  padding: 80px 20px 20px;
`

export default MainPage
