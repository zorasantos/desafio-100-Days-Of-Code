import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { headerHeight, footerHeight } from './utils/constants'

import 'normalize.css'
import 'milligram'

import Header from './components/header'
import VideoSingle from './components/VideoSingle'
import VideoList from './components/videos-list'
import RegisterVideo from './components/Register-video'
import Footer from './components/footer'
import { fetchVideos } from '../src/redux-flow/reducers/videos/action-creators'

class App extends PureComponent {
  componentDidMount () {
    this.props.fetchVideos()
  }
  render () {
    const { isRegisterVideoFormOpened } = this.props

    return (
      <Container>
    <Header />

    <Main>
      {isRegisterVideoFormOpened && <RegisterVideo />}
      <VideoSingle />
      <VideoList />
    </Main>
    <Footer />
  </Container>
    )
  }
}

const Container = styled.div`
  height: 100%;
`
const Main = styled.main`
  min-height: calc(100% - ${headerHeight} - ${footerHeight});
`
const mapStateToProps = (state) => ({
  isRegisterVideoFormOpened: state.ui.isRegisterVideoFormOpened
})

const mapDispatchToProps = { fetchVideos: fetchVideos }

export default connect(mapStateToProps, mapDispatchToProps)(App)