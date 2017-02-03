import React from 'react'
import { connect } from 'react-redux'

import { Row, Column } from '@/bearings'


function NotFound() {
  return (
    <Row>
      <Column md={12}>
        <h1>
          404 Not Found
        </h1>
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
