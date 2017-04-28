import React from 'react'
import PropTypes from 'prop-types'

import { propTypeFieldContext } from '../../utils'


/**
 * Connect component to the field id, that is...
 * When it is a descendent of a Field, it will have a
 * keyAttr (usually 'id', or 'htmlFor' (Label), or 'name' (checkable)) prop set to the
 * field context that was passed down
 * @param  {React.node} component
 * @param  {String} [keyAttr='id'] The prop name the component will be given
 *                                 with the field id
 *                                 ex. for 'label', use 'htmlFor'
 * @param  {Bool}        always    force connecting field id (if available)
 * @return {React.node}
 */
export default function canConnectField(component, keyAttr = 'id', always = false) {
  const FieldConnectable = ({ connectField, connectRootField, ...restProps }, context) => {
    const { field } = context

    const fieldProps = (() => {
      if ((always || connectField || connectRootField) && typeof field === 'object') {
        const accessor = connectRootField ? 'root' : 'info'

        return {
          field: field[accessor],
          [keyAttr]: field[accessor].id,
        }
      }

      return {}
    })()

    return React.createElement(component, { ...restProps, ...fieldProps })
  }

  FieldConnectable.propTypes = {
    connectField: PropTypes.bool,
    connectRootField: PropTypes.bool,
  }

  FieldConnectable.defaultProps = {
    connectField: false,
    connectRootField: false,
  }

  FieldConnectable.contextTypes = {
    field: propTypeFieldContext,
  }

  return FieldConnectable
}
