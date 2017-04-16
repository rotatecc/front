import React from 'react'
import PropTypes from 'prop-types'


/**
 * Make a field component groupable, that is...
 * When it is a direct child of a FieldGroup, it will have a
 * keyAttr (usually 'id', or optionally 'htmlFor') created and passed down
 * by the FieldGroup via groupId.
 * @param  {React.node} component
 * @param  {String} [keyAttr='id'] The prop name the component will be given with the groupId
 *                                 ex. for 'label', use 'htmlFor'
 * @return {React.node}
 */
export default function makeFieldGroupable(component, keyAttr = 'id') {
  const FieldGroupable = ({ isGrouped, groupId, ...restProps }) => {
    const groupProps = isGrouped ? { [keyAttr]: groupId } : {}

    return React.createElement(component, { ...restProps, ...groupProps })
  }

  FieldGroupable.propTypes = {
    isGrouped: PropTypes.bool,
    groupId: PropTypes.string,
    // ...restProps
  }

  FieldGroupable.defaultProps = {
    isGrouped: false,
    groupId: '',
  }

  return FieldGroupable
}
