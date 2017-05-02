import React from 'react'
import { styled } from 'styletron-react'

import { Input, expandStyles } from '@/bearings'


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

function Search() {
  return (
    <BarWrapper>
      <Bar type="search" placeholder="Search" />
    </BarWrapper>
  )
}

Search.propTypes = {
}

export default Search
