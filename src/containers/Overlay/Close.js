import React from 'react'
import PropTypes from 'prop-types'
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
    'pointer',
  ),

  fontFamily: 'sans-serif',
}))


function Close({ color, onClick }) {
  return (
    <Container color={color} onClick={onClick}>&times;</Container>
  )
}

Close.propTypes = {
  onClick: PropTypes.func.isRequired,

  color: PropTypes.string.isRequired, // has default
}

Close.defaultProps = {
  color: '~white',
}

export default Close
