import React from 'react';
import styled from 'styled-components';


const Container = styled.a`
  color: black;
  cursor: pointer;
  font-size: 30px;
  position: absolute;
  right: 20px;
  top: 10px;
`;

const PrimaryContainer = styled(Container)`
  font-size: 30px;
`;

const SecondaryContainer = styled(Container)`
  font-size: 25px;
`;

const SlimContainer = styled(Container)`
  font-size: 20px;
`;

const versionLookup = {
  primary: PrimaryContainer,
  secondary: SecondaryContainer,
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
  version: React.PropTypes.string,
  onClick: React.PropTypes.func.isRequired,
};

export default MenuIcon;
