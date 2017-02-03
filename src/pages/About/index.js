import React from 'react'
import { connect } from 'react-redux'
import { Row, Column } from 'hedron'
import { createStructuredSelector } from 'reselect'

import Hero from '@/components/Hero'


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
