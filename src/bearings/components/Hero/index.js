import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
  width: 100%;
  height: 350px;

  background: black;
  color: white;
`

const PageWidth = styled.div`
  width: 1250px;
  margin: 0 auto;
  display: flex;

  @media screen and (max-width: 1300px) {
    width: 95%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

const Inner = styled.div`
  align-self: center;
`

function Hero() {
  return (
    <Wrapper>
      <PageWidth>
        <Inner>
          <h2>About</h2>
        </Inner>
      </PageWidth>
    </Wrapper>
  )
}

Hero.propTypes = {
}

export default Hero
