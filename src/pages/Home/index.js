import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { Container, Row, Column, H2 } from '@/bearings'

import * as progressDuck from '@/ducks/progress'
import * as authDuck from '@/ducks/auth'

import LoginForm from '@/containers/LoginForm'


function Home({ isLoading, isLoggedIn, login, logout, me, roleSlug }) {
  return (
    <Container>
      <Row>
        <Column>
          <H2>Hello</H2>
          <p>{isLoading ? 'loading' : 'stagnant'}</p>
          <p>{isLoggedIn ? `logged in as ${me.get('email')}` : 'not logged in'}</p>
          <p>{roleSlug}</p>
          {isLoggedIn && <button onClick={logout}>Log out</button>}
        </Column>
        <Column>
          <LoginForm
            onSubmit={login}
          />
        </Column>
      </Row>
    </Container>
  )
}

Home.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  me: PropTypes.any,
  roleSlug: PropTypes.any,
}

const mapStateToProps = createStructuredSelector({
  isLoading: progressDuck.selectIsProgressing,
  isLoggedIn: authDuck.selectIsLoggedIn,
  me: authDuck.selectMe,
  roleSlug: authDuck.selectRoleSlug,
})

const mapDispatchToProps = (dispatch) => ({
  login: (fields) => dispatch(authDuck.submitLoginForm(fields)),
  logout: () => dispatch(authDuck.logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
