/**
 * AtLeft
 *
 * AtLeft, similar to AtRight and AtCenter, is a helper component
 * that assists positioning in parents that expect them
 *
 * Do not use outside of components such as Level, Media, etc.
 */


import React from 'react'
import PropTypes from 'prop-types'


export default function AtLeft({ children, ...props }) {
  return React.createElement('div', props, children)
}

AtLeft.propTypes = {
  children: PropTypes.node,
}
