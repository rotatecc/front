/**
 * Logo
 */

import React from 'react'
import { styled } from 'styletron-react'
import { Link } from 'react-router'

import { H1, expandStyles } from '@/bearings'


const BaseContainer = styled(H1, expandStyles(
  'absoluteVerticalCenter',
  'd/block',
  'm/0',
  'p/0',
  'lh/1',
))

const PrimaryContainer = styled(BaseContainer, expandStyles(
  'pBottom/4px',
  'c/~black',
  'fs/2.5rem',
))

const SlimContainer = styled(BaseContainer, expandStyles(
  'pBottom/4px',
  'c/~white',
  'fs/2rem',
))

const StyledLink = styled(Link, {
  ...expandStyles(
    'pBottom/4px',
    'c/inherit',
    'fs/2.5rem',
    'tDecor/none',
  ),

  ':hover': expandStyles('c/inherit'),
})


const versionLookup = {
  primary: PrimaryContainer,
  slim: SlimContainer,
}

function Logo(props) {
  const VersionedContainer = versionLookup[props.version]

  return (
    <VersionedContainer>
      <StyledLink to="/" title="rotate.cc">
        rotate
      </StyledLink>
    </VersionedContainer>
  )
}

Logo.propTypes = {
  version: React.PropTypes.oneOf(Object.keys(versionLookup)).isRequired,
}

export default Logo
