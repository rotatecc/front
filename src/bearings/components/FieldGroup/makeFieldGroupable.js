import React from 'react'
import PropTypes from 'prop-types'


/**
 * Make a field component groupable, that is...
 * When it is a descendent of a FieldGroup, it will have a
 * keyAttr (usually 'id', or optionally 'htmlFor') prop set to the
 * fieldGroupId context that was passed down
 * @param  {React.node} component
 * @param  {String} [keyAttr='id'] The prop name the component will be given
 *                                 with the fieldGroupId
 *                                 ex. for 'label', use 'htmlFor'
 * @return {React.node}
 */
export default function makeFieldGroupable(component, keyAttr = 'id') {
  const FieldGroupable = (props, context) => {
    const { fieldGroupId } = context

    const groupProps = typeof fieldGroupId === 'string'
      ? { [keyAttr]: fieldGroupId }
      : {}

    return React.createElement(component, { ...props, ...groupProps })
  }

  FieldGroupable.contextTypes = {
    fieldGroupId: PropTypes.string,
  }

  return FieldGroupable
}
