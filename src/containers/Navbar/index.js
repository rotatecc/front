/*
 * Navbar
 *
 * Header navbar; needs state for current page (TODO)
 */

import React from 'react'
import styled from 'styled-components'

import Item from './Item'


const Container = styled.div`
  margin: 15px 0;

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
`

const PrimaryContainer = styled(Container)`
  text-align: center;

  @media screen and (max-width: 600px) {
    display: none;
  }
`

const SlimContainer = styled(Container)`
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  width: 100%;

  @media screen and (max-width: 760px) {
    display: none;
  }

  ul {
    li {
      a {
        color: white;
        padding: 9px 10px;

        &:after {
          bottom: 0px;
        }

        &:hover {
          color: white;

          &:after {
            background: white;
            height: 1px;
          }
        }
      }
    }
  }
`

const versionLookup = {
  primary: PrimaryContainer,
  slim: SlimContainer,
}

function Navbar({ version }) {
  const VersionedContainer = versionLookup[version]

  return (
    <VersionedContainer>
      <ul>
        <Item link="#" name="Home" />
        <Item link="#" name="Build" />
        <Item link="#" name="Knowledge" />
        <Item link="#" name="Community" />
        <Item link="#" name="About" />
      </ul>
    </VersionedContainer>
  )
}

Navbar.propTypes = {
  version: React.PropTypes.oneOf(Object.keys(versionLookup)).isRequired,
}

export default Navbar
