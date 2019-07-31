import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { headerHeight } from '../utils/constants'
import { openRegisterVideo } from '../redux-flow/ui/action-creators'

const MainHeader = ({onOpenRegisterVideo}) => (
    <Header>
      <HeaderTitle>Reactflix</HeaderTitle>
      <RegisterButton onClick={onOpenRegisterVideo}>Cadastrar Video</RegisterButton>
    </Header>
)

const Header = styled.header`
  height: ${headerHeight};
  background: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`

const HeaderTitle = styled.h1`
  margin-bottom: 0;
  color: #fff;
`

const RegisterButton = styled.button`
  margin-bottom: 0;
`

const mapDispatchToProps = (dispatch) => ({
  onOpenRegisterVideo: () => dispatch(openRegisterVideo())
})

export default connect(null, mapDispatchToProps)(MainHeader)