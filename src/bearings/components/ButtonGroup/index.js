/**
 * ButtonGroup
 *
 * The idea of ButtonGroup is grouping Buttons by making its children aware
 * that they are in a group, via passing down a flag via context.
 */

import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'styletron-react'

import { expandStyles } from '../../utils'


const StyledWrapper = styled('div', expandStyles(
  'd/inline-flex',
  // TODO
))


export default class ButtonGroup extends React.PureComponent {
  getChildContext() {
    return {
      isInButtonGroup: true,
    }
  }

  render() {
    return React.createElement(StyledWrapper, this.props)
  }
}

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
}

ButtonGroup.childContextTypes = {
  isInButtonGroup: PropTypes.bool,
}
