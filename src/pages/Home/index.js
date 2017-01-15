import React from 'react'
import { connect } from 'react-redux'
import { Row, Column } from 'hedron'
import { createStructuredSelector } from 'reselect'

import * as progressDuck from '@/ducks/progress'
import * as authDuck from '@/ducks/auth'

import LoginForm from '@/containers/LoginForm'


function Home({ isLoading, isLoggedIn, login, logout, me, roleSlug }) {
  return (
    <Row>
      <Column md={6}>
        <h2>Home</h2>
        <p>{isLoading ? 'loading' : 'stagnant'}</p>
        <p>{isLoggedIn ? `logged in as ${me.get('email')}` : 'not logged in'}</p>
        <p>{roleSlug}</p>
        {isLoggedIn && <button onClick={logout}>Log out</button>}
      </Column>
      <Column md={6}>
        <LoginForm
          onSubmit={login}
        />
      </Column>
    </Row>
  )
}

Home.propTypes = {
  isLoading: React.PropTypes.bool.isRequired,
  login: React.PropTypes.func.isRequired,
  logout: React.PropTypes.func.isRequired,
  isLoggedIn: React.PropTypes.bool.isRequired,
  me: React.PropTypes.any,
  roleSlug: React.PropTypes.any,
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
