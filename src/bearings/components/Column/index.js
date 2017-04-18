import React from 'react'
import PropTypes from 'prop-types'

import { styled } from 'styletron-react'

import { expandStyles } from '../../utils'


const StyledDiv = styled('div', expandStyles(
  'd/block',
  'fBasis/0',
  'fGrow/1',
  'fShrink/1',
  'p/0.75rem',
))


export default function Column({ gapless, children, ...restProps }) {
  return React.createElement(StyledDiv, restProps, children)
}

Column.propTypes = {
  gapless: PropTypes.bool,
  children: PropTypes.node,
}

Column.defaultProps = {
  gapless: false,
}
