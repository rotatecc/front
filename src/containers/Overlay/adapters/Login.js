import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import * as authDuck from '@/ducks/auth'

import LoginForm from '@/containers/LoginForm'

import Close from '../Close'


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`

const Box = styled.div`
  max-height: 90vh;
  width: 400px;
  background: rgba(255, 255, 255, 0.95);
  text-align: center;
  overflow: auto;

  @media screen and (max-width: 450px) {
    width: 95%;
  }
`

function Login({ close, login }) {
  return (
    <Container className="should-close-overlay">
      <Close onClick={close} />
      <Box>
        <h3>Log in</h3>
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
