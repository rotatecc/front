import React from 'react'
import PropTypes from 'prop-types'


/**
 * Connect component to the field id, that is...
 * When it is a descendent of a Field, it will have a
 * keyAttr (usually 'id', or 'htmlFor' (Label), or 'name' (checkable)) prop set to the
 * fieldId context that was passed down
 * @param  {React.node} component
 * @param  {String} [keyAttr='id'] The prop name the component will be given
 *                                 with the fieldId
 *                                 ex. for 'label', use 'htmlFor'
 * @param {Bool}        always     force connecting field id (if available)
 * @return {React.node}
 */
export default function canConnectFieldId(component, keyAttr = 'id', always = false) {
  const FieldConnectable = ({ connectFieldId, ...restProps }, context) => {
    const { fieldId } = context

    const groupProps = ((always || connectFieldId) && typeof fieldId === 'string')
      ? { [keyAttr]: fieldId }
      : {}

    return React.createElement(component, { ...restProps, ...groupProps })
  }

  FieldConnectable.propTypes = {
    connectFieldId: PropTypes.bool,
  }

  FieldConnectable.defaultProps = {
    connectFieldId: false,
  }

  FieldConnectable.contextTypes = {
    fieldId: PropTypes.string,
  }

  return FieldConnectable
}
