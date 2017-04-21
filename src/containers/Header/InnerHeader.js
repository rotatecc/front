import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'styletron-react'

import { expandStyles, breakpointMax } from '@/bearings'

import Logo from '@/components/Logo'
import Navbar from '@/components/Navbar'

import MenuIcon from './MenuIcon'
import SearchIcon from './SearchIcon'
import MobileAuthBar from './MobileAuthBar'


const PrimaryWrapper = styled('div', expandStyles(
  'd/flex',
  'relative',
  'bgc/~white',
  'c/~black',
  'fullWidth',
  'h/60px',
  'fJustifyContent/space-between',
  'fAlignItems/center',

  // breakpointMax('widescreen', expandStyles('mBottom/50px')),
))


const SlimWrapper = styled('div', ({ show }) => expandStyles(
  'fixed',
  'd/flex',
  'fullWidth',
  'h/40px',
  'atLeft',
  'bgc/~brandPrimary',
  'c/~white',
  `t/${show ? '0' : '-40px'}`,
  `o/${show ? '1' : '0.5'}`,
  'fJustifyContent/space-between',
  'fAlignItems/center',
  'trans/all 200ms ease',
))


const Side = styled('div', expandStyles('d/flex', 'fAlignItems/stretch'))


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
  version: PropTypes.oneOf(['primary', 'slim']).isRequired,
  scrollTop: PropTypes.number.isRequired,

  // actions
  onMenuIconClick: PropTypes.func.isRequired,
  onSearchIconClick: PropTypes.func.isRequired,
  onClickLogin: PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types, max-len
  onClickRegister: PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types, max-len
}

export default InnerHeader
