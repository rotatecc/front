/**
 * FieldGroup
 *
 * The idea of FieldGroup is grouping field units
 *      ex. Label + Textfield + hint
 * and
 * 1. applying a bit of margin on the bottom (unless noMargin=true)
 * 2. making its children aware that they are in a group, via:
 * 3. passing down a common unique group id ('fieldGroupId') via context
 *    that can be used to link a Label to a field and thus focus on the field
 *    when the user clicks on a Label (via default browser functionality)
 *
 * The ./makeFieldGroupable util can be used to make a component
 * intercept this groupId and turn it into an id/htmlFor
 * to link them into the group
 */

import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'styletron-react'

import { expandStyles } from '../../utils'


/**
 * We want a unique id for each FieldGroup instance.
 * Let's keep it here as a mutable variable. Each time a
 * FieldGroup is instantiated, it will be stored then
 * incremented for the next instance.
 * @type {Number}
 */
let nextFieldGroupIdNumber = 0


export const DivWithMargin = styled('div', expandStyles(
  'mBottom/~fieldGroupMarginBottom',
))


export default class FieldGroup extends React.PureComponent {
  constructor() {
    super()

    this.fieldGroupIdNumber = nextFieldGroupIdNumber

    // NOTE Mutation !!!
    nextFieldGroupIdNumber += 1
  }

  getChildContext() {
    return {
      fieldGroupId: `fieldGroup${this.fieldGroupIdNumber}`,
    }
  }

  render() {
    const { noMargin, ...restProps } = this.props

    const component = noMargin ? 'div' : DivWithMargin

    return React.createElement(component, restProps)
  }
}

FieldGroup.propTypes = {
  noMargin: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

FieldGroup.defaultProps = {
  noMargin: false,
}

FieldGroup.childContextTypes = {
  fieldGroupId: PropTypes.string,
}
