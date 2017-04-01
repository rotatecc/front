import React from 'react'
import { styled } from 'styletron-react'

import { expandStyles, H3 } from '@/bearings'

import Close from '../Close'


const Container = styled('div', {
  ...expandStyles('d/flex', 'h/100vh', 'fullWidth'),

  justifyContent: 'center',
  alignItems: 'center',
})

const BarWrapper = styled('div', {
  ...expandStyles(
    'd/flex',
    'h/150px',
    'w/80%',
    'bgc/rgba(255, 255, 255, 0.95)',
  ),

  justifyContent: 'center',
  alignItems: 'center',
})

function Register({ close }) {
  return (
    <Container className="should-close-overlay">
      <Close onClick={close} />
      <BarWrapper>
        <H3>Register</H3>
      </BarWrapper>
    </Container>
  )
}

Register.propTypes = {
  close: React.PropTypes.func.isRequired,
}

export default Register
