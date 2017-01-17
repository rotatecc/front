import React from 'react'
import { connect } from 'react-redux'
import { Row, Column } from 'hedron'
import { createStructuredSelector } from 'reselect'


function About() {
  return (
    <Row>
      <Column md={6}>
        <h2>About</h2>
      </Column>
      <Column md={6}>
        ok
      </Column>
    </Row>
  )
}

About.propTypes = {
}

const mapStateToProps = createStructuredSelector({
})

const mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(About)
