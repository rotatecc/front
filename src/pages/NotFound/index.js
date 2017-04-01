import React from 'react'
import { connect } from 'react-redux'

import { Row, Column, H2 } from '@/bearings'


function NotFound() {
  return (
    <Row>
      <Column md={12}>
        <H2>
          404 Not Found
        </H2>
      </Column>
    </Row>
  )
}

NotFound.propTypes = {
  // TODO
}

const mapStateToProps = (/* state */) => ({
  // TODO
})

const mapDispatchToProps = (/* dispatch */) => ({
  // TODO
})

export default connect(mapStateToProps, mapDispatchToProps)(NotFound)
