import React from 'react'
import styled from 'styled-components'

import Logo from '@/components/Logo'
import Navbar from '@/components/Navbar'

import MenuIcon from './MenuIcon'
import SearchIcon from './SearchIcon'
import MobileAuthBar from './MobileAuthBar'


const PrimaryWrapper = styled.div`
  background: white;
  color: black;
  position: relative;
  width: 100%;
  height: 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1200px) {
    margin-bottom: 50px;
  }
`

const SlimWrapper = styled.div`
  transition: all 200ms ease;
  background: ${({ theme }) => theme.palette.primary};
  color: white;
  position: fixed;
  width: 100%;
  height: 40px;
  left: 0;
  top: ${({ show }) => (show ? '0' : '-40px')};
  opacity: ${({ show }) => (show ? '1' : '0.5')};

  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Side = styled.div`
  display: flex;
  align-items: stretch;
`

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
