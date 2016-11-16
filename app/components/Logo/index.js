/**
 * Logo
 */

import React from 'react';
import styled from 'styled-components';


const LogoWrapper = styled.h1`
  line-height: 1;
  margin: 0;
  padding: 0;
  text-align: ${(props) => (props.centered ? 'center' : 'left')};
`;

const LogoLink = styled.a`
  color: inherit;
  text-decoration: none;
`;

function Logo(props) {
  return (
    <LogoWrapper centered={props.centered}>
      <LogoLink href="/">
        rotate
      </LogoLink>
    </LogoWrapper>
  );
}

Logo.propTypes = {
  centered: React.PropTypes.bool,
};

Logo.defaultProps = {
  centered: false,
};

export default Logo;
