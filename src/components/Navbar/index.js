import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'styletron-react'

import { expandStyles, breakpointMax } from '@/bearings'

import { propRequiredIf } from '@/utils'

import Item from './Item'


const Container = styled('div', expandStyles(
  breakpointMax('desktop', expandStyles('d/none')),
))


const StyledUl = styled('ul', expandStyles('m/0', 'p/0', 'noListStyle'))


function MainMenu({ version }) {
  const items = [
    ['/', 'Home'],
    ['/build', 'Build'],
    ['/knowledge', 'Knowledge'],
    ['/community', 'Community'],
    ['/about', 'About'],
  ]

  return (
    <StyledUl>
      {items.map(([to, name]) =>
        <Item key={to} version={version} to={to} name={name} />)}
    </StyledUl>
  )
}

MainMenu.propTypes = {
  version: PropTypes.oneOf(['primary', 'slim']).isRequired,
}


function RightMenu({ onClickLogin, onClickRegister, version }) {
  return (
    <StyledUl>
      <Item version={version} onClick={onClickLogin} name={'Log in'} />
      <Item version={version} onClick={onClickRegister} name={'Register'} />
    </StyledUl>
  )
}

RightMenu.propTypes = {
  onClickLogin: PropTypes.func.isRequired,
  onClickRegister: PropTypes.func.isRequired,
  version: PropTypes.oneOf(['primary', 'slim']).isRequired,
}


const menuLookup = {
  main: MainMenu,
  right: RightMenu,
}


function Navbar({ version, menu, onClickLogin, onClickRegister }) {
  const Menu = menuLookup[menu]

  const menuProps = {
    version,
    ...(menu === 'right' ? { onClickLogin, onClickRegister } : {}),
  }

  return (
    <Container>
      <Menu {...menuProps} />
    </Container>
  )
}

Navbar.propTypes = {
  version: PropTypes.oneOf(['primary', 'slim']).isRequired,
  menu: PropTypes.oneOf(Object.keys(menuLookup)).isRequired,
  onClickLogin: propRequiredIf(PropTypes.func, ({ menu }) => menu === 'right'),
  onClickRegister: propRequiredIf(PropTypes.func, ({ menu }) => menu === 'right'),
}

export default Navbar
