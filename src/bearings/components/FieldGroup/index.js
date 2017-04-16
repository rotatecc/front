/**
 * FieldGroup
 *
 * The idea of FieldGroup is grouping field units
 *      ex. Label + Textfield + hint
 * and
 * 1. applying a bit of margin on the bottom
 * 2. making its children aware that they are in a group, via:
 * 3. passing down a common unique group id that can be
 *    used to link a Label to a field and thus focus on the field
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


let nextFieldGroupIdNumber = 0


export const DivWithMargin = styled('div', expandStyles(
  'mBottom/~fieldGroupMarginBottom',
))


export default class FieldGroup extends React.PureComponent {
  constructor() {
    super()

    this.fieldGroupIdNumber = nextFieldGroupIdNumber

    // NOTE Increment !!!
    nextFieldGroupIdNumber += 1
  }

  render() {
    const { children, ...restProps } = this.props

    // pass isGrouped=true and a unique id prop to all non-string-type (ex. not 'div') children
    const groupAwareChildren = React.Children.map(children, (child) => {
      if (!child || typeof child !== 'object' || typeof child.type === 'string') {
        return child
      }

      const childProps = {
        isGrouped: true,
        groupId: `fieldGroup${this.fieldGroupIdNumber}`,
      }

      return React.cloneElement(child, childProps)
    })

    return React.createElement(DivWithMargin, restProps, groupAwareChildren)
  }
}

FieldGroup.propTypes = {
  children: PropTypes.node.isRequired,
}
