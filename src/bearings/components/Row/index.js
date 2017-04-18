import React from 'react'
import PropTypes from 'prop-types'

import { styled } from 'styletron-react'

import { expandStyles } from '../../utils'


const StyledDiv = styled('div', expandStyles(
  'd/flex',
  'mLeft/-0.75rem',
  'mRight/-0.75rem',
  'mTop/-0.75rem',
))


export default class Row extends React.PureComponent {
  getChildContext() {
    return {}
  }

  render() {
    const { children, ...restProps } = this.props
    return React.createElement(StyledDiv, restProps, children)
  }
}

Row.propTypes = {
  children: PropTypes.node,
}

Row.childContextTypes = {
}
