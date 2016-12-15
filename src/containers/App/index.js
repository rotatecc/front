import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import WindowWatcher from '@/containers/WindowWatcher'

import Overlay from '@/containers/Overlay'
import Header from '@/containers/Header'

import ThemeProvider from '@/components/ThemeProvider'
import Footer from '@/components/Footer'


const Container = styled.div`
  background: ${({ theme }) => theme.palette.background};
  color: ${({ theme }) => theme.palette.text};
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

// Sticky footer
const Content = styled.div`
  flex: 1;
`


const App = ({ children }) => (
  <div>
    <WindowWatcher />
    <ThemeProvider>
      <Container>
        <Overlay />
        <Helmet
          titleTemplate="%s - rotate.cc"
          defaultTitle="rotate.cc"
          meta={[
            { name: 'description', content: 'rotate.cc : TODO' },
          ]}
        />
        <Header />
        <Content>
          {React.Children.toArray(children)}
        </Content>
        <Footer />
      </Container>
    </ThemeProvider>
  </div>
)

App.propTypes = {
  children: PropTypes.node.isRequired,
}

export default connect()(App)
