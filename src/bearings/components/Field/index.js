/**
 * Field
 *
 * Group together connectable form elements and make them aware
 *
 * Many purposes:
 * - Creating for/id link between Label and Input
 * - Creating addons (one-piece smushed Controls)
 * - Creating groups (children in columns)
 * - Applying common props to form elements (brand, size, disabled, etc)
 * - Positioning Label and other children in horizontal fashion
 *
 * Can be nested (ex. addons field within horizontal field)
 */

import React from 'react'
import invariant from 'invariant'
import PropTypes from 'prop-types'

import {
  propTypeFieldContext,
  propIsSize,
  propIsBrand,
  propIsColumnBreakpoint,
} from '../../utils'

import Structure from './Structure'


/**
 * We want a unique id for each Field instance.
 * Let's keep it here as a mutable integer. Each time a
 * Field is instantiated, it will be stored then
 * incremented for the next instance.
 * @type {Number}
 */
let nextFieldIdNumber = 0


export default class Field extends React.PureComponent {
  constructor(props) {
    super(props)

    this.fieldIdNumber = nextFieldIdNumber

    // !!! Mutation !!!
    nextFieldIdNumber += 1
  }

  getChildContext() {
    return {
      field: this.makeFieldContext(),
    }
  }

  componentWillMount() {
    this.checkProps(this.props)
  }

  componentWillReceiveProps(newProps) {
    this.checkProps(newProps)
  }

  get isRootField() {
    return !this.context.field
  }

  get id() {
    return `fieldId${this.fieldIdNumber}`
  }

  /**
   * Verify props object when this Field is nested
   */
  checkProps = (props) => {
    // For all fields...

    invariant(
      !(props.addons && props.grouped),
      'Field cannot be grouped and have addons. Try using Field-grouped with a nested Field-addons',
    )

    // For nested Fields...

    if (!this.isRootField) {
      const parentFieldMeta = this.context.field.meta

      invariant(
        !props.horizontal,
        'Field-horizontal must be the root Field (cannot be nested)',
      )

      invariant(
        !parentFieldMeta.addons,
        'Field-addons cannot have descendent Fields',
      )
    }

    // more?
  }

  makeFieldContext = () => {
    const isRoot = this.isRootField

    const parentField = this.context.field

    const id = this.id

    // Look up inherited meta for this context. try 1. this.props 2. parent 3. undefined
    const inheritLookup = (name) =>
      this.props[name] || (!isRoot && parentField.meta[name]) || undefined

    const meta = {
      // Unique to this Field
      id,
      addons: this.props.addons,
      grouped: this.props.grouped,
      horizontal: this.props.horizontal,

      // This field, or inherit from parent
      size: inheritLookup('size'),
      brand: inheritLookup('brand'),
      disabled: inheritLookup('disabled'),

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
    // All of the presentational logic lives in Structure
    return React.createElement(Structure, {
      ...this.props,
      isRootField: this.isRootField,
    })
  }
}

Field.propTypes = {
  children: PropTypes.node.isRequired,

  noMargin: PropTypes.bool,

  // passed down via field context meta:

  horizontal: propIsColumnBreakpoint,
  grouped: propIsColumnBreakpoint,
  addons: PropTypes.bool,

  size: propIsSize,
  brand: propIsBrand,
  disabled: PropTypes.bool,
}

Field.childContextTypes = {
  field: propTypeFieldContext,
}

Field.contextTypes = {
  field: propTypeFieldContext,
}
