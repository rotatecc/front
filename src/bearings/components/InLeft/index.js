/**
 * InLeft
 *
 * InLeft, similar to InRight and InCenter, is a helper component
 * that assists positioning in parents that expect them
 *
 * Do not use outside of components such as Level, Media, etc.
 */


import React from 'react'
import PropTypes from 'prop-types'


export default function InLeft({ children, ...props }) {
  return React.createElement('div', props, children)
}

InLeft.propTypes = {
  children: PropTypes.node,
}
