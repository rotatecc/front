/*
 * Navbar
 *
 * Header navbar; needs state for current page (TODO)
 */

import React from 'react';
import styled from 'styled-components';

import Item from './Item';


const NavbarWrapper = styled.div`
  margin: 15px 0;
  text-align: ${(props) => (props.centered ? 'center' : 'left')};

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      display: inline-block;
      margin-right: 15px;

      a {
        color: ${({ theme }) => theme.palette.primary};
        cursor: pointer;
        display: block;
        font-size: .8rem;
        letter-spacing: 1px;
        padding: 10px;
        position: relative;
        text-decoration: none;
        text-transform: uppercase;

        &:after {
          background: transparent;
          transition: all 200ms cubic-bezier(.25,.1,.25,1);
          content: "";
          width: 100%;
          height: 0;
          position: absolute;
          bottom: -3px;
          left: 0;
        }

        &:hover {
          color: ${({ theme }) => theme.palette.primaryDark};

          &:after {
            background: ${({ theme }) => theme.palette.primaryDark};
            height: 1px;
          }
        }
      }

      &:last-of-type {
        margin-right: 0;
      }
    }
  }
`;


export class Navbar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <NavbarWrapper centered={this.props.centered}>
        <ul>
          <Item link="#" name="Home" />
          <Item link="#" name="Build" />
          <Item link="#" name="Knowledge" />
          <Item link="#" name="Community" />
          <Item link="#" name="About" />
        </ul>
      </NavbarWrapper>
    );
  }
}

Navbar.propTypes = {
  centered: React.PropTypes.bool,
};

Navbar.defaultProps = {
  centered: false,
};

export default Navbar;
