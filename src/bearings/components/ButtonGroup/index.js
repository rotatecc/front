/**
 * ButtonGroup
 *
 * The idea of ButtonGroup is grouping Buttons by making its direct children aware
 * that they are in a group, via passing down a flag (isInButtonGroup) via props.
 * The first child will be given isFirstInGroup
 * The last child will be given isLastInGroup
 *
 * NOTE Button elements should be direct descendents!
 */

import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'styletron-react'

import { expandStyles, propIsSize } from '../../utils'


const StyledWrapper = styled('div', expandStyles(
  'relative',
  'd/inline-flex',
  'vAlign/middle',
))


export default function ButtonGroup({ children, size, outline, link, disabled, ...restProps }) {
  const lastChildIndex = React.Children.count(children) - 1

  const groupedChildren = React.Children.map(children, (child, i) =>
    React.cloneElement(child, {
      size,
      outline,
      link,
      disabled,
      isInButtonGroup: true,
      isFirstInGroup: i === 0,
      isLastInGroup: i === lastChildIndex,
    }))

  return React.createElement(StyledWrapper, restProps, groupedChildren)
}

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
  size: propIsSize,
  link: PropTypes.bool,
  outline: PropTypes.bool,

  disabled: PropTypes.bool,
}

ButtonGroup.defaultProps = {
  size: 'normal',
  link: false,
  outline: false,

  disabled: false,
}
