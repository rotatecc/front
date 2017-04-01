import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { Hero, Row, Column, H2 } from '@/bearings'


function About() {
  return (
    <div>
      <Hero />
      <Row>
        <Column md={6}>
          <H2>About</H2>
        </Column>
        <Column md={6}>
          ok
        </Column>
      </Row>
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
