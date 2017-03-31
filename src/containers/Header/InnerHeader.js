import React from 'react'
import { styled } from 'styletron-react'

import { expandStyles } from '@/bearings'

import Logo from '@/components/Logo'
import Navbar from '@/components/Navbar'

import MenuIcon from './MenuIcon'
import SearchIcon from './SearchIcon'
import MobileAuthBar from './MobileAuthBar'


const PrimaryWrapper = styled('div', {
  ...expandStyles(
    'd/flex',
    'relative',
    'bgc/p~white',
    'c/p~black',
    'fullWidth',
    'h/60px',
  ),

  justifyContent: 'space-between',
  alignItems: 'center',

  '@media screen and (max-width: 1200px)': {
    ...expandStyles('mBottom/50px'),
  },
})


const SlimWrapper = styled('div', ({ show }) => ({
  ...expandStyles(
    'fixed',
    'd/flex',
    'fullWidth',
    'h/40px',
    'atLeft',
    'bgc/p~primary',
    'c/p~white',
    `t/${show ? '0' : '-40px'}`,
    `o/${show ? '1' : '0.5'}`,
  ),

  transition: 'all 200ms ease',

  justifyContent: 'space-between',
  alignItems: 'center',
}))


const Side = styled('div', {
  ...expandStyles('d/flex'),

  alignItems: 'stretch',
})


function shouldShowSlimHeader({ scrollTop, showMenuOverlay, showSearchOverlay }) {
  if (showMenuOverlay || showSearchOverlay) {
    return false
  }

  return scrollTop > 150
}


function InnerHeader(props) {
  const {
    version,
    onMenuIconClick,
    onSearchIconClick,
    onClickLogin,
    onClickRegister,
  } = props

  const versionProp = { version }

  const Wrapper = version === 'slim' ? SlimWrapper : PrimaryWrapper

  const authActions = { onClickLogin, onClickRegister }

  return (
    <Wrapper show={shouldShowSlimHeader(props)}>
      {version === 'primary' && <MobileAuthBar {...authActions} />}
      <Side>
        <MenuIcon {...versionProp} onClick={onMenuIconClick} />
        <Navbar {...versionProp} menu="main" />
      </Side>
      <Logo {...versionProp} />
      <Side>
        <Navbar {...versionProp} {...authActions} menu="right" />
        <SearchIcon {...versionProp} onClick={onSearchIconClick} />
      </Side>
    </Wrapper>
  )
}

InnerHeader.propTypes = {
  // props
  version: React.PropTypes.oneOf(['primary', 'slim']).isRequired,
  scrollTop: React.PropTypes.number.isRequired,

  // actions
  onMenuIconClick: React.PropTypes.func.isRequired,
  onSearchIconClick: React.PropTypes.func.isRequired,
  onClickLogin: React.PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types, max-len
  onClickRegister: React.PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types, max-len
}

export default InnerHeader
