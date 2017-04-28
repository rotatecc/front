/**
 * Field
 *
 * Group together connectable form elements and make them aware
 *
 * Many purposes:
 * - Creating for/id link between Label and Input
 * - Creating addons (one-piece smushed Controls)
 * - Creating groups (children in columns)
 * - Applying common props to form elements (feedback, size, disabled, etc)
 * - Positioning Label and other children in horizontal fashion
 *
 * Can be nested (ex. addons field within horizontal field)
 */

import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'styletron-react'

import {
  expandStyles,
  propTypeFieldContext,
  propIsSize,
  propIsFeedback,
} from '../../utils'


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
    return !this.context.field
  }

  makeId = () => `fieldId${this.fieldIdNumber}`

  makeFieldContext = () => {
    const isRoot = this.isRootField

    const parentField = this.context.field

    const id = this.makeId()

    // look up meta for this context. try 1. this.props 2. parent 3. undefined
    const metaLookup = (name) =>
      this.props[name] || (!isRoot && parentField.meta[name]) || undefined

    const meta = {
      id,
      size: metaLookup('size'),
      feedback: metaLookup('feedback'),
      disabled: metaLookup('disabled'),
      // NOTE if more are added, make sure to update
      // Field.propTypes and propTypeFieldMeta
    }

    if (isRoot) {
      return { meta, rootMeta: meta, idHierarchy: [id] }
    }

    return {
      meta,
      rootMeta: parentField.rootMeta,
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
  children: PropTypes.node.isRequired,

  noMargin: PropTypes.bool,

  // passed down via field context meta:
  size: propIsSize,
  feedback: propIsFeedback,
  disabled: PropTypes.bool,
}

Field.childContextTypes = {
  field: propTypeFieldContext,
}

Field.contextTypes = {
  field: propTypeFieldContext,
}
