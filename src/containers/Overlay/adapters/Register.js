import React from 'react'
import { styled } from 'styletron-react'

import { expandStyles, H3 } from '@/bearings'


const BarWrapper = styled('div', expandStyles(
  'flexCenter',
  'd/flex',
  'h/150px',
  'w/80%',
  'bgc/rgba(255, 255, 255, 0.95)',
))

function Register() {
  return (
    <BarWrapper>
      <H3>Register</H3>
    </BarWrapper>
  )
}

Register.propTypes = {
}

export default Register
