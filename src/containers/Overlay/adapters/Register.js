import React from 'react'
import styled from 'styled-components'

import Close from '../Close'


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`

const BarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.95);
  height: 150px;
  width: 80%;
`

function Register({ close }) {
  return (
    <Container className="should-close-overlay">
      <Close onClick={close} />
      <BarWrapper>
        <h3>Register</h3>
      </BarWrapper>
    </Container>
  )
}

Register.propTypes = {
  close: React.PropTypes.func.isRequired,
}

export default Register
