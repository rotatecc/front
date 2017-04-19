import React from 'react'
import { connect } from 'react-redux'

import { Hero } from '@/bearings'


function NotFound() {
  return (
    <div>
      <Hero title="404 Not Found" />
    </div>
  )
}

NotFound.propTypes = {
}

const mapStateToProps = (/* state */) => ({
})

const mapDispatchToProps = (/* dispatch */) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(NotFound)
