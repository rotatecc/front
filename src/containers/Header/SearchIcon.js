import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'styletron-react'

import { expandStyles } from '@/bearings'


const Container = styled('a', {
  ...expandStyles(
    'd/flex',
    'c/~black',
    'pointer',
    'fAlignItems/center',
  ),

  ':hover': expandStyles('c/~black'),
})

const PrimaryContainer = styled(Container, expandStyles(
  'fs/24px',
  'p/4px/30px/0/18px',
))

const SlimContainer = styled(Container, {
  ...expandStyles(
    'c/~white',
    'fs/20px',
    'p/2px/30px/0/18px',
  ),

  ':hover': expandStyles('c/~white'),
})

const Rotate45 = styled('div', {
  transform: 'rotate(45deg)',
})


const versionLookup = {
  primary: PrimaryContainer,
  slim: SlimContainer,
}

function MenuIcon({ version, onClick }) {
  const VersionedContainer = versionLookup[version]

  return (
    <VersionedContainer onClick={onClick}>
      <Rotate45>
        &#9906;
      </Rotate45>
    </VersionedContainer>
  )
}

MenuIcon.propTypes = {
  version: PropTypes.oneOf(Object.keys(versionLookup)).isRequired,
  onClick: PropTypes.func.isRequired,
}

export default MenuIcon
