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
  padding: 1px 30px 0 18px;

  @media screen and (max-width: 600px) {
    /*top: 3px;*/
  }
`

const SlimContainer = styled(Container)`
  color: white;
  font-size: 20px;
  padding: 0 30px 2px 18px;

  &:hover {
    color: white;
  }
`

const Rotate45 = styled.div`
  transform: rotate(45deg);
`

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
