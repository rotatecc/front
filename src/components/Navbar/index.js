import React from 'react'
import styled from 'styled-components'

import { requiredIf } from '@/utils'

import A from '@/components/A'

import Item from './Item'


const Container = styled.div`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      display: inline-block;

      a {
        cursor: pointer;
        display: block;
        height: 60px;
        padding: 19px 12px;
        font-size: .9rem;
        letter-spacing: 1px;
        text-decoration: none;
        transition: all 200ms cubic-bezier(.25,.1,.25,1);
        color: ${({ theme }) => theme.palette.primary};

        &:hover {
          color: ${({ theme }) => theme.palette.primaryDark};
        }
      }
    }
  }
`

const PrimaryContainer = styled(Container)`
  @media screen and (max-width: 1200px) {
    display: none;
  }

  @media screen and (max-width: 1400px) {
    ul {
      li {
        a {
          padding: 19px 8px;
        }
      }
    }
  }
`

const SlimContainer = styled(Container)`
  ul {
    li {
      a {
        height: 40px;
        padding: 8px 12px;
        color: white;

        &:hover {
          color: white;
          background: ${({ theme }) => theme.palette.primaryDark};
        }
      }
    }
  }

  @media screen and (max-width: 1200px) {
    display: none;
  }

  @media screen and (max-width: 1400px) {
    ul {
      li {
        a {
          padding: 8px 6px;
        }
      }
    }
  }
`


function MainMenu() {
  return (
    <ul>
      <Item to="/" name="Home" />
      <Item to="/build" name="Build" />
      <Item to="/knowledge" name="Knowledge" />
      <Item to="/community" name="Community" />
      <Item to="/about" name="About" />
    </ul>
  )
}

function RightMenu({ onClickLogin, onClickRegister }) {
  return (
    <ul>
      <li><A onClick={onClickLogin}>Log in</A></li>
      <li><A onClick={onClickRegister}>Register</A></li>
    </ul>
  )
}

RightMenu.propTypes = {
  onClickLogin: React.PropTypes.func.isRequired,
  onClickRegister: React.PropTypes.func.isRequired,
}


const versionLookup = {
  primary: PrimaryContainer,
  slim: SlimContainer,
}

const menuLookup = {
  main: MainMenu,
  right: RightMenu,
}


function Navbar({ version, menu, onClickLogin, onClickRegister }) {
  const VersionedContainer = versionLookup[version]
  const Menu = menuLookup[menu]

  const menuProps = menu === 'right' ? { onClickLogin, onClickRegister } : {}

  return (
    <VersionedContainer>
      <Menu {...menuProps} />
    </VersionedContainer>
  )
}

Navbar.propTypes = {
  version: React.PropTypes.oneOf(Object.keys(versionLookup)).isRequired,
  menu: React.PropTypes.oneOf(Object.keys(menuLookup)).isRequired,
  onClickLogin: requiredIf(React.PropTypes.func, ({ menu }) => menu === 'right'),
  onClickRegister: requiredIf(React.PropTypes.func, ({ menu }) => menu === 'right'),
}

export default Navbar
