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
import invariant from 'invariant'
import { styled } from 'styletron-react'

import { expandStyles, propIsSize } from '../../utils'

import Button from '../Button'


const StyledWrapper = styled('div', expandStyles(
  'relative',
  'd/inline-flex',
  'vAlign/middle',
))


export default function ButtonGroup({ children, size, outline, link, disabled, ...restProps }) {
  const lastChildIndex = React.Children.count(children) - 1

  const groupedChildren = React.Children.map(children, (child, i) => {
    invariant(
      child.type === Button,
      'All direct children of ButtonGroup must be a Button',
    )

    return React.cloneElement(child, {
      // Bulk-apply these four props
      size,
      outline,
      link,
      disabled,

      // Group-specific props
      isInButtonGroup: true,
      isFirstInGroup: i === 0,
      isLastInGroup: i === lastChildIndex,
    })
  })

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
