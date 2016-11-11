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
  margin: 25px auto 15px;
  padding: 0;
  text-align: center;
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
