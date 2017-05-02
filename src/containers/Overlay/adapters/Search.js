import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'styletron-react'

import config from '@/config'

import { Input, expandStyles } from '@/bearings'

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

const Bar = styled(Input, expandStyles(
  'bordW/0',
  'h/100px',
  'w/90%',
  'fs/4rem',
))

function Search({ close }) {
  return (
    <Container className={config.overlayCloseClassname}>
      <Close onClick={close} />
      <BarWrapper>
        <Bar type="search" placeholder="Search" />
      </BarWrapper>
    </Container>
  )
}

Search.propTypes = {
  close: PropTypes.func.isRequired,
}

export default Search
