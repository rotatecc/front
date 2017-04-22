/**
 * InRight
 *
 * InRight, similar to InLeft and InCenter, is a helper component
 * that assists positioning in parents that expect them
 *
 * Do not use outside of components such as Level, Media, etc.
 */


import React from 'react'
import PropTypes from 'prop-types'


export default function InRight({ children, ...props }) {
  return React.createElement('div', props, children)
}

InRight.propTypes = {
  children: PropTypes.node,
}
