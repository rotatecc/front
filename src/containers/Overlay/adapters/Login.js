import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { styled } from 'styletron-react'

import { expandStyles, mediaWidthRange, H3 } from '@/bearings'

import * as authDuck from '@/ducks/auth'

import LoginForm from '@/containers/LoginForm'

import Close from '../Close'


const Container = styled('div', expandStyles(
  'flexCenter',
  'd/flex',
  'h/100vh',
  'fullWidth',
))


const Box = styled('div', {
  ...expandStyles(
    'hMax/90vh',
    'w/400px',
    'bgc/rgba(255, 255, 255, 0.95)',
    'tAlign/center',
    'overY/auto',
  ),

  ...mediaWidthRange(null, '450px', expandStyles('w/95%')),
})


function Login({ close, login }) {
  return (
    <Container className="should-close-overlay">
      <Close onClick={close} />
      <Box>
        <H3>Log in</H3>
        <LoginForm onSubmit={login} />
      </Box>
    </Container>
  )
}

Login.propTypes = {
  // Actions
  close: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
}


const mapDispatchToProps = (dispatch) => ({
  login: (fields) => dispatch(authDuck.submitLoginForm(fields)),
})

export default connect(null, mapDispatchToProps)(Login)
