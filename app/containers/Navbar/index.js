/*
 * Navbar
 *
 * Header navbar; needs state for current page (TODO)
 */

import React from 'react';
import styled from 'styled-components';

import Item from './Item';


const NavbarWrapper = styled.div`
  width: 100%;

  ul {
    list-style-type: none;

    li {
      display: inline-block;
      margin-right: 15px;

      a {
        display: block;
        padding: 5px 10px;
        text-decoration: none;
      }
    }
  }
`;


export default class Navbar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <NavbarWrapper>
        <ul>
          <Item link="#" name="test" />
        </ul>
      </NavbarWrapper>
    );
  }
}
