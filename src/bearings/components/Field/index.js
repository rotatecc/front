/**
 * Field
 *
 * The idea of Field is grouping field units
 *      ex. Label + TextInput + hint
 * and
 * 1. applying a bit of margin on the bottom (unless noMargin=true)
 * 2. making its descendents aware that they are in a group, via:
 * 3. passing down a common unique group id ('fieldId') via context
 *    that can be used to link a Label to a field and thus focus on the field
 *    when the user clicks on a Label (via default browser functionality)
 *
 * The ./canConnectField util can be used to make a component
 * intercept this groupId and turn it into an id/htmlFor
 * to link them into the group
 */

import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'styletron-react'

import { expandStyles, propTypeFieldContext } from '../../utils'


/**
 * We want a unique id for each Field instance.
 * Let's keep it here as a mutable integer. Each time a
 * Field is instantiated, it will be stored then
 * incremented for the next instance.
 * @type {Number}
 */
let nextFieldIdNumber = 0


export const Marginal = styled('div', ({ hasMarginBottom }) => expandStyles(
  hasMarginBottom && 'mBottom/~fieldMarginBottom',
))


export default class Field extends React.PureComponent {
  constructor() {
    super()

    this.fieldIdNumber = nextFieldIdNumber

    // !!! Mutation !!!
    nextFieldIdNumber += 1
  }

  getChildContext() {
    return {
      field: this.makeFieldContext(),
    }
  }

  get isRootField() {
    return Boolean(this.context.field)
  }

  makeId = () => `fieldId${this.fieldIdNumber}`

  makeFieldContext = () => {
    const id = this.makeId()

    const info = {
      id,
    }

    if (this.isRootField) {
      return { info, root: info, idHierarchy: [id] }
    }

    const parentField = this.context.field

    return {
      info,
      root: parentField.root,
      idHierarchy: [...parentField.idHierarchy, id],
    }
  }

  render() {
    const { noMargin, ...restProps } = this.props

    const hasMarginBottom = (!noMargin && this.isRootField)

    return React.createElement(Marginal, { hasMarginBottom, ...restProps })
  }
}

Field.propTypes = {
  noMargin: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

Field.defaultProps = {
}

Field.childContextTypes = {
  field: propTypeFieldContext,
}

Field.contextTypes = {
  field: propTypeFieldContext,
}
