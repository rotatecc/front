import React from 'react';
import styled from 'styled-components';

import Logo from 'components/Logo';
import Navbar from 'containers/Navbar';
import MenuIcon from './MenuIcon';
import SearchIcon from './SearchIcon';


function shouldShow({ scrollTop, showMenuOverlay, showSearchOverlay }) {
  if (showMenuOverlay || showSearchOverlay) {
    return false;
  }

  return scrollTop > 150;
}


const Wrapper = styled.div`
  transition: all 200ms ease;
  background: ${({ theme }) => theme.palette.primary};
  color: white;
  position: fixed;
  left: 0;
  top: ${({ show }) => (show ? '0' : '-40px')};
  opacity: ${({ show }) => (show ? '1' : '0.5')};
  width: 100%;
  height: 40px;
  overflow: hidden;
`;

const versionProp = {
  version: 'slim',
};

function SlimHeader(props) {
  const { onMenuIconClick, onSearchIconClick } = props;

  return (
    <Wrapper show={shouldShow(props)}>
      <Logo {...versionProp} />
      <Navbar {...versionProp} />
      <MenuIcon {...versionProp} onClick={onMenuIconClick} />
      <SearchIcon {...versionProp} onClick={onSearchIconClick} />
    </Wrapper>
  );
}

SlimHeader.propTypes = {
  // props
  scrollTop: React.PropTypes.number.isRequired,
  menuOverlay: React.PropTypes.bool.isRequired,
  searchOverlay: React.PropTypes.bool.isRequired,

  // actions
  onMenuIconClick: React.PropTypes.func.isRequired,
  onSearchIconClick: React.PropTypes.func.isRequired,
};

export default SlimHeader;
