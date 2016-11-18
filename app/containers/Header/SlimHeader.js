import React from 'react';
import styled from 'styled-components';


function shouldShow({ scrollTop, showMenuOverlay, showSearchOverlay }) {
  if (showMenuOverlay || showSearchOverlay) {
    return false;
  }

  return scrollTop > 150;
}


const Wrapper = styled.div`
  transition: top 200ms ease;
  background: ${({ theme }) => theme.palette.primary};
  color: white;
  position: fixed;
  left: 0;
  top: ${({ show }) => (show ? '0' : '-40px')};
  width: 100%;
  height: 40px;
`;


function SlimHeader(props) {
  return (
    <Wrapper show={shouldShow(props)}>
      [slim header]
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
