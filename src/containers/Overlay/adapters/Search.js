import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'styletron-react'

import { TextField, expandStyles } from '@/bearings'

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

const Bar = styled(TextField, expandStyles(
  'bordW/0',
  'h/100px',
  'w/90%',
  'fs/4rem',
))

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
  close: PropTypes.func.isRequired,
}

export default Search
