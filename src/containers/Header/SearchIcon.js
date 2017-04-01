import React from 'react'
import { styled } from 'styletron-react'

import { expandStyles } from '@/bearings'


const Container = styled('a', {
  ...expandStyles(
    'd/flex',
    'c/p~black',
    'pointer',
    'fAlign/center',
  ),

  ':hover': expandStyles('c/p~black'),
})

const PrimaryContainer = styled(Container, {
  ...expandStyles(
    'fs/24px',
    'p/4px/30px/0/18px',
  ),
})

const SlimContainer = styled(Container, {
  ...expandStyles(
    'c/p~white',
    'fs/20px',
    'p/2px/30px/0/18px',
  ),

  ':hover': expandStyles('c/p~white'),
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
  version: React.PropTypes.oneOf(Object.keys(versionLookup)).isRequired,
  onClick: React.PropTypes.func.isRequired,
}

export default MenuIcon
