import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { Hero, Row, Column } from '@/bearings'


function About() {
  return (
    <div>
      <Hero />
      <Row>
        <Column md={6}>
          <h2>About</h2>
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
