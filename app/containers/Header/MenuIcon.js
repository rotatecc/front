import React from 'react';
import styled from 'styled-components';


const Container = styled.a`
  display: block;
  color: black;
  cursor: pointer;
  font-size: 30px;
  position: absolute;
  right: 20px;
  top: 26px;

  overflow: hidden;
  height: 21px;
  line-height: 16px;
`;

const PrimaryContainer = styled(Container)`
  font-size: 30px;

  @media screen and (max-width: 600px) {
    top: 3px;
  }
`;

const SlimContainer = styled(Container)`
  color: white;
  font-size: 20px;
  top: 3px;
`;

const versionLookup = {
  primary: PrimaryContainer,
  slim: SlimContainer,
};

function MenuIcon({ version, onClick }) {
  const VersionedContainer = versionLookup[version];

  return (
    <VersionedContainer onClick={onClick}>
      &#9776;
    </VersionedContainer>
  );
}

MenuIcon.propTypes = {
  version: React.PropTypes.oneOf(Object.keys(versionLookup)).isRequired,
  onClick: React.PropTypes.func.isRequired,
};

export default MenuIcon;
