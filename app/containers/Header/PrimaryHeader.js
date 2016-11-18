import React from 'react';
import styled from 'styled-components';

import Logo from 'components/Logo';
import Navbar from 'containers/Navbar';
import MenuIcon from './MenuIcon';
import SearchIcon from './SearchIcon';


// NOTE make sure wrapper height matches the
// slim header checker in ./index
const Wrapper = styled.div`
  height: 150px;
  padding: 25px 0 0;
`;

const CenteredRow = styled.div`
  display: flex;
  justify-content: center;
`;

const versionProp = {
  version: 'primary',
};

function PrimaryHeader({ onMenuIconClick, onSearchIconClick }) {
  return (
    <Wrapper>
      <CenteredRow>
        <Logo {...versionProp} />
      </CenteredRow>
      <CenteredRow>
        <Navbar {...versionProp} />
      </CenteredRow>
      <MenuIcon {...versionProp} onClick={onMenuIconClick} />
      <SearchIcon {...versionProp} onClick={onSearchIconClick} />
    </Wrapper>
  );
}

PrimaryHeader.propTypes = {
  // props
  scrollTop: React.PropTypes.number.isRequired,
  menuOverlay: React.PropTypes.bool.isRequired,
  searchOverlay: React.PropTypes.bool.isRequired,

  // actions
  onMenuIconClick: React.PropTypes.func.isRequired,
  onSearchIconClick: React.PropTypes.func.isRequired,
};

export default PrimaryHeader;
