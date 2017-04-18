import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'styletron-react'

import { expandStyles, breakpointMax } from '@/bearings'


const Container = styled('div', expandStyles(
  'flexCenter',
  'd/none',
  'absolute',
  't/100%',
  'fullWidth',
  'h/30px',
  'fs/0.9rem',
  'ls/1px',

  breakpointMax('desktop', expandStyles('d/flex')),
))


const Link = styled('a', {
  ...expandStyles('d/block', 'mRight/18px'),
  ':last-of-type': expandStyles('mRight/0'),
})


function MobileAuthBar({ onClickLogin, onClickRegister }) {
  return (
    <Container>
      <Link onClick={onClickLogin}>Log in</Link>
      <Link onClick={onClickRegister}>Register</Link>
    </Container>
  )
}

MobileAuthBar.propTypes = {
  onClickLogin: PropTypes.func.isRequired,
  onClickRegister: PropTypes.func.isRequired,
}

export default MobileAuthBar
