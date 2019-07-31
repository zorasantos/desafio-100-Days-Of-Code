import React from 'react'
import styled from 'styled-components'

import 'normalize.css'
import 'milligram'

import VideoSingle from './components/VideoSingle'
import VideoList from './components/videos-List/index'
import RegisterVideo from './components/Register-video';


const App = () => (
  <Container>
    <Header>
      <h1>Reactflix</h1>
    </Header>

    <Main>
      <RegisterVideo />
      <VideoSingle />
      <VideoList />
    </Main>

    <Footer>
      &copy; 2019
    </Footer>
  </Container>
)

const headerHeight = '60px'
const footerHeight = '30px'

const Container = styled.div`
  height: 100%;
`

const Header = styled.header`
  height: ${headerHeight};
  background: #333;
`

const Main = styled.main`
  min-height: calc(100% - ${headerHeight} - ${footerHeight});
`

const Footer = styled.footer`
  height: ${footerHeight};
  background: #333;
`

export default App