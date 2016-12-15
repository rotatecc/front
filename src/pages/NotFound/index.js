import React from 'react'
import { connect } from 'react-redux'
import { Row, Column } from 'hedron'

import H1 from '@/components/H1'


function NotFound() {
  return (
    <Row>
      <Column md={12}>
        <H1>
          404 Not Found
        </H1>
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
