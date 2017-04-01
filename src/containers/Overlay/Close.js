import React from 'react'
import { styled } from 'styletron-react'

import { expandStyles } from '@/bearings'


const Container = styled('a', ({ color }) => ({
  ...expandStyles(
    'fixed',
    't/1px',
    'r/20px',
    'fs/40px',
    'z/105',
    `c/${color}`,
  ),

  cursor: 'pointer',
  fontFamily: 'sans-serif',
}))


function Close({ color, onClick }) {
  return (
    <Container color={color} onClick={onClick}>&times;</Container>
  )
}

Close.propTypes = {
  color: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
}

Close.defaultProps = {
  color: 'white',
}

export default Close
