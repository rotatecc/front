import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { styled } from 'styletron-react'

import { expandStyles, Hero, Container, Row, Column, H2 } from '@/bearings'


const HeroTitle = styled(H2, expandStyles(
  'fs/3.5rem',
))


function About() {
  return (
    <div>
      <Hero brand="dark">
        <HeroTitle>About</HeroTitle>
      </Hero>
      <Container>
        <Row columnsTablet="one-half">
          <Column>
            <H2>About</H2>
          </Column>
          <Column>
            ok
          </Column>
        </Row>
      </Container>
    </div>
  )
}

About.propTypes = {
}

const mapStateToProps = createStructuredSelector({
})

const mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(About)
