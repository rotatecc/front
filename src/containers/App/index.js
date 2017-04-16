import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { styled } from 'styletron-react'
import Helmet from 'react-helmet'

import WindowWatcher from '@/containers/WindowWatcher'

import Overlay from '@/containers/Overlay'
import Header from '@/containers/Header'

import Footer from '@/components/Footer'

import * as authDuck from '@/ducks/auth'

import { expandStyles } from '@/bearings'


const Container = withRouter(styled('div', expandStyles(
  'd/flex',
  'bgc/~backgroundColor',
  'c/~textColor',
  'hMin/100vh',
  'fDirection/column',
)))

// Sticky footer
const Content = withRouter(styled('div', expandStyles('fGrow/1')))


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
            {children}
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


export default withRouter(connect(null, mapDispatchToProps)(App))
