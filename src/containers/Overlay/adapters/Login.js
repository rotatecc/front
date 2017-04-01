import React from 'react'
import { connect } from 'react-redux'
import { styled } from 'styletron-react'

import { expandStyles, H3 } from '@/bearings'

import * as authDuck from '@/ducks/auth'

import LoginForm from '@/containers/LoginForm'

import Close from '../Close'


const Container = styled('div', {
  ...expandStyles(
    'd/flex',
    'h/100vh',
    'fullWidth',
  ),

  justifyContent: 'center',
  alignItems: 'center',
})


const Box = styled('div', {
  ...expandStyles(
    'hMax/90vh',
    'w/400px',
    'bgc/rgba(255, 255, 255, 0.95)',
  ),

  textAlign: 'center',
  overflow: 'auto',

  '@media screen and (max-width: 450px)': expandStyles('w/95%'),
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
  close: React.PropTypes.func.isRequired,
  login: React.PropTypes.func.isRequired,
}


const mapDispatchToProps = (dispatch) => ({
  login: (fields) => dispatch(authDuck.submitLoginForm(fields)),
})

export default connect(null, mapDispatchToProps)(Login)
