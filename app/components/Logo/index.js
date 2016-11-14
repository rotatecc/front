/**
 * Logo
 */

import React from 'react';
import styled from 'styled-components';


const LogoWrapper = styled.h1`
  font-family: 'Megrim', sans-serif;
  font-size: 40px;
  font-weight: 400;
  line-height: 1;
  margin: 0;
  padding: 0;
`;

const LogoLink = styled.a`
  color: inherit;
  text-decoration: none;
`;

const Logo = () => (
  <LogoWrapper>
    <LogoLink href="/">
      rotate
    </LogoLink>
  </LogoWrapper>
);

export default Logo;
