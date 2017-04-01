import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { styled } from 'styletron-react'
import Helmet from 'react-helmet'

import WindowWatcher from '@/containers/WindowWatcher'

import Overlay from '@/containers/Overlay'
import Header from '@/containers/Header'

import Footer from '@/components/Footer'

import * as authDuck from '@/ducks/auth'

import { expandStyles } from '@/bearings'


const Container = styled('div', {
  ...expandStyles(
    'd/flex',
    'bgc/p~background',
    'c/p~text',
    'hMin/100vh',
  ),

  flexDirection: 'column',
})

// Sticky footer
const Content = styled('div', { flex: 1 })


class App extends React.PureComponent {
  componentWillMount() {
    const { initialSyncMe } = this.props
    initialSyncMe()
  }

  render() {
    const { children } = this.props

    return (
      <div>
        <WindowWatcher />
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
      </div>
    )
  }
}


App.propTypes = {
  children: PropTypes.node.isRequired,
  initialSyncMe: PropTypes.func.isRequired,
}


export function mapDispatchToProps(dispatch) {
  return {
    initialSyncMe: () => dispatch(authDuck.initialSyncMe()),
  }
}


export default connect(null, mapDispatchToProps)(App)
