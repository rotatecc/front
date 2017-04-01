import React from 'react'
import { styled } from 'styletron-react'

import { expandStyles, mediaWidthRange } from '@/bearings'


const Container = styled('div', {
  ...expandStyles(
    'flexCenter',
    'd/none',
    'absolute',
    't/100%',
    'fullWidth',
    'h/30px',
    'fs/0.9rem',
    'ls/1px',
  ),

  ...mediaWidthRange(null, '1200px', expandStyles('d/flex')),
})


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
  onClickLogin: React.PropTypes.func.isRequired,
  onClickRegister: React.PropTypes.func.isRequired,
}

export default MobileAuthBar
