import React from 'react'
import { styled } from 'styletron-react'

import { expandStyles } from '@/bearings'


const Container = styled('a', {
  ...expandStyles(
    'd/flex',
    'c/p~black',
  ),

  alignItems: 'center',
  cursor: 'pointer',

  ':hover': expandStyles('c/p~black'),
})

const PrimaryContainer = styled(Container, {
  ...expandStyles(
    'fs/24px',
    'p/4px/18px/0/30px',
  ),
})

const SlimContainer = styled(Container, {
  ...expandStyles(
    'c/p~white',
    'fs/20px',
    'p/2px/18px/0/30px',
  ),

  ':hover': expandStyles('c/p~white'),
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
  version: React.PropTypes.oneOf(Object.keys(versionLookup)).isRequired,
  onClick: React.PropTypes.func.isRequired,
}

export default MenuIcon
