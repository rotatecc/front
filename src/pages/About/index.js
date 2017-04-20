import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { Hero, Container, Row, Column, H2 } from '@/bearings'


function About() {
  return (
    <div>
      <Hero>
        <H2>About</H2>
      </Hero>
      <Container>
        <Row>
          <Column tablet="one-half">
            <H2>About</H2>
          </Column>
          <Column tablet="one-half">
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
