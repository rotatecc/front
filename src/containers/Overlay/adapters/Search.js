import React from 'react'
import { styled } from 'styletron-react'

import { expandStyles } from '@/bearings'

import Close from '../Close'


const Container = styled('div', expandStyles(
  'flexCenter',
  'd/flex',
  'h/100vh',
  'fullWidth',
))

const BarWrapper = styled('div', expandStyles(
  'flexCenter',
  'd/flex',
  'h/150px',
  'w/80%',
  'bgc/rgba(255, 255, 255, 0.95)',
))

const Bar = styled('input', {
  ...expandStyles(
    'bordW/0',
    'h/100px',
    'w/90%',
    'fs/4rem',
    'noOutline',
  ),

  fontFamily: '\'proxima-nova\', \'Helvetica Neue\', Helvetica, Arial, sans-serif',
})

function Search({ close }) {
  return (
    <Container className="should-close-overlay">
      <Close onClick={close} />
      <BarWrapper>
        <Bar placeholder="Search" />
      </BarWrapper>
    </Container>
  )
}

Search.propTypes = {
  close: React.PropTypes.func.isRequired,
}

export default Search
