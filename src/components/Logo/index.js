/**
 * Logo
 */

import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router'


const BaseContainer = styled.h1`
  display: block;
  margin: 0;
  padding: 0;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  line-height: 1;
`

const PrimaryContainer = styled(BaseContainer)`
  padding-bottom: 4px;

  color: black;
  font-size: 2.5rem;
`

const SlimContainer = styled(BaseContainer)`
  padding-bottom: 4px;

  color: white;
  font-size: 2rem;
`

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: inherit;
  }
`

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
