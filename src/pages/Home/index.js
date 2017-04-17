import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { Row, Column, H2, CheckableSet, Label, FieldGroup } from '@/bearings'

import * as progressDuck from '@/ducks/progress'
import * as authDuck from '@/ducks/auth'

import LoginForm from '@/containers/LoginForm'


function Home({ isLoading, isLoggedIn, login, logout, me, roleSlug }) {
  return (
    <Row>
      <Column md={6}>
        <H2>Hello</H2>
        <p>{isLoading ? 'loading' : 'stagnant'}</p>
        <p>{isLoggedIn ? `logged in as ${me.get('email')}` : 'not logged in'}</p>
        <p>{roleSlug}</p>
        <FieldGroup>
          <Label>Which one?</Label>
          <CheckableSet
            type="checkbox"
            items={[
              { label: 'Which one?', value: 'ok' },
              { label: 'Which one?', value: 'k' },
              { label: 'Which one?', value: 'k2' },
            ]}
          />
        </FieldGroup>
        {isLoggedIn && <button onClick={logout}>Log out</button>}
        <br />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
