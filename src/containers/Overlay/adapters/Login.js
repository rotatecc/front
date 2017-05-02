import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { H3, ModalContent, Box } from '@/bearings'

import * as authDuck from '@/ducks/auth'

import LoginForm from '@/containers/LoginForm'


function Login({ login }) {
  return (
    <ModalContent>
      <Box>
        <H3>Log in</H3>
        <LoginForm onSubmit={login} />
      </Box>
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
