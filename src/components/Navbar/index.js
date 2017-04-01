import React from 'react'
import { styled } from 'styletron-react'

import { expandStyles } from '@/bearings'

import { propRequiredIf } from '@/utils'

import Item from './Item'


const Container = styled('div', {
  '@media screen and (max-width: 1200px)': expandStyles('d/none'),
})


const StyledUl = styled('ul', {
  ...expandStyles('m/0', 'p/0'),
  listStyleType: 'none',
})


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
  version: React.PropTypes.oneOf(['primary', 'slim']).isRequired,
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
  onClickLogin: React.PropTypes.func.isRequired,
  onClickRegister: React.PropTypes.func.isRequired,
  version: React.PropTypes.oneOf(['primary', 'slim']).isRequired,
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
  version: React.PropTypes.oneOf(['primary', 'slim']).isRequired,
  menu: React.PropTypes.oneOf(Object.keys(menuLookup)).isRequired,
  onClickLogin: propRequiredIf(React.PropTypes.func, ({ menu }) => menu === 'right'),
  onClickRegister: propRequiredIf(React.PropTypes.func, ({ menu }) => menu === 'right'),
}

export default Navbar
