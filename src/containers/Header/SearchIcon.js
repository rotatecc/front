import React from 'react'
import styled from 'styled-components'


const Container = styled.a`
  display: block;
  color: black;
  cursor: pointer;
  font-size: 30px;
  position: absolute;
  right: 27px;
  top: 54px;
`

const PrimaryContainer = styled(Container)`
  font-size: 30px;
  overflow: hidden;
  line-height: 9px;
  height: 18px;

  @media screen and (max-width: 600px) {
    top: 28px;
  }
`

const SlimContainer = styled(Container)`
  color: white;
  font-size: 20px;
  right: 60px;
  top: 2px;
`

const versionLookup = {
  primary: PrimaryContainer,
  slim: SlimContainer,
}

function SearchIcon({ version, onClick }) {
  const VersionedContainer = versionLookup[version]

  return (
    <VersionedContainer onClick={onClick}>
      s
    </VersionedContainer>
  )
}

SearchIcon.propTypes = {
  version: React.PropTypes.oneOf(Object.keys(versionLookup)).isRequired,
  onClick: React.PropTypes.func.isRequired,
}

export default SearchIcon
