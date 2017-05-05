import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { H3, ModalContent } from '@/bearings'

import * as authDuck from '@/ducks/auth'

import LoginForm from '@/containers/LoginForm'


function Login({ login }) {
  return (
    <ModalContent column="4" boxed>
      <H3>Log in</H3>
      <LoginForm onSubmit={login} />
    </ModalContent>
  )
}

Login.propTypes = {
  // Actions
  login: PropTypes.func.isRequired,
}


const mapDispatchToProps = (dispatch) => ({
  login: (fields) => dispatch(authDuck.submitLoginForm(fields)),
})

export default connect(null, mapDispatchToProps)(Login)
