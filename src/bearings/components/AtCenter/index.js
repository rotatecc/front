/**
 * AtCenter
 *
 * AtCenter, similar to AtLeft and AtRight, is a helper component
 * that assists positioning in parents that expect them
 *
 * Do not use outside of components such as Level, Media, etc.
 */


import React from 'react'
import PropTypes from 'prop-types'


export default function AtCenter({ children, ...props }) {
  return React.createElement('div', props, children)
}

AtCenter.propTypes = {
  children: PropTypes.node,
}
