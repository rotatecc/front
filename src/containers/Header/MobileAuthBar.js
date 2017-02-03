import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 100%;
  ${''/* right: 0;*/}
  width: 100%;
  height: 30px;
  font-size: .9rem;
  letter-spacing: 1px;

  @media screen and (max-width: 1200px) {
    display: flex;
  }

  a {
    display: block;
    margin-right: 18px;

    &:last-of-type {
      margin-right: 0;
    }
  }
`

function MobileAuthBar({ onClickLogin, onClickRegister }) {
  return (
    <Container>
      <a onClick={onClickLogin}>Log in</a>
      <a onClick={onClickRegister}>Register</a>
    </Container>
  )
}

MobileAuthBar.propTypes = {
  onClickLogin: React.PropTypes.func.isRequired,
  onClickRegister: React.PropTypes.func.isRequired,
}

export default MobileAuthBar
