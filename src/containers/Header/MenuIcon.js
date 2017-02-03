import React from 'react'
import styled from 'styled-components'


const Container = styled.a`
  display: flex;
  align-items: center;
  color: black;
  cursor: pointer;

  &:hover {
    color: black;
  }
`

const PrimaryContainer = styled(Container)`
  font-size: 24px;
  padding: 4px 18px 0 30px;

  @media screen and (max-width: 600px) {
    /*top: 3px;*/
  }
`

const SlimContainer = styled(Container)`
  color: white;
  font-size: 20px;
  padding: 2px 18px 0 30px;

  &:hover {
    color: white;
  }
`

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
