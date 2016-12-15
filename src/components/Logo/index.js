/**
 * Logo
 */

import React from 'react'
import styled from 'styled-components'


const Container = styled.h1`
  line-height: 1;
  margin: 0;
  padding: 0;
`

const PrimaryContainer = styled(Container)`
  text-align: center;
`

const SlimContainer = styled(Container)`
  color: white;
  font-size: 2rem;
  text-align: left;
  position: absolute;
  top: 2px;
  left: 20px;
`

const Link = styled.a`
  color: inherit;
  text-decoration: none;
`

const versionLookup = {
  primary: PrimaryContainer,
  slim: SlimContainer,
}

function Logo(props) {
  const VersionedContainer = versionLookup[props.version]

  return (
    <VersionedContainer>
      <Link href="/">
        rotate
      </Link>
    </VersionedContainer>
  )
}

Logo.propTypes = {
  version: React.PropTypes.oneOf(Object.keys(versionLookup)).isRequired,
}

export default Logo
