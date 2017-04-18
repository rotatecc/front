import React from 'react'
import PropTypes from 'prop-types'


export default function Row({ children }) {
  return <div>{children}</div>
}

Row.propTypes = {
  children: PropTypes.node,
}
