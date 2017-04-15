import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'styletron-react'

import { expandStyles } from '@/bearings'


const Container = styled('a', {
  ...expandStyles(
    'd/flex',
    'c/~black',
    'pointer',
    'fAlign/center',
  ),

  ':hover': expandStyles('c/~black'),
})

const PrimaryContainer = styled(Container, expandStyles(
  'fs/24px',
  'p/4px/18px/0/30px',
))

const SlimContainer = styled(Container, {
  ...expandStyles(
    'c/~white',
    'fs/20px',
    'p/2px/18px/0/30px',
  ),

  ':hover': expandStyles('c/~white'),
})

const versionLookup = {
  primary: PrimaryContainer,
  slim: SlimContainer,
}

function MenuIcon({ version, onClick }) {
  const VersionedContainer = versionLookup[version]

  return (
    <VersionedContainer onClick={onClick}>
      &#9776;
    </VersionedContainer>
  )
}

MenuIcon.propTypes = {
  version: PropTypes.oneOf(Object.keys(versionLookup)).isRequired,
  onClick: PropTypes.func.isRequired,
}

export default MenuIcon
