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
 * @param  {Bool}        alwaysId    force connecting field id (if available)
 * @return {React.node}
 */
export default function canConnectField(component, keyAttr = 'id', alwaysId = false) {
  const FieldConnectable = (props, context) => {
    const {
      connectField,
      connectRootField,
      connectFieldId,
      connectRootFieldId,
      ...restProps
    } = props

    const { field } = context

    const fieldProps = typeof field === 'object' && ({
      ...((connectField || connectRootField) &&
        { fieldMeta: field[connectRootField ? 'rootMeta' : 'meta'] }),
      ...((alwaysId || connectFieldId || connectRootFieldId) &&
        { [keyAttr]: field[connectRootFieldId ? 'rootMeta' : 'meta'].id }),
    })

    return React.createElement(component, { ...restProps, ...fieldProps })
  }

  FieldConnectable.propTypes = {
    connectField: PropTypes.bool, // has default
    connectRootField: PropTypes.bool, // has default
    connectFieldId: PropTypes.bool, // has default
    connectRootFieldId: PropTypes.bool, // has default
  }

  FieldConnectable.defaultProps = {
    connectField: true, // connect first-parent Field by default
    connectRootField: false,
    connectFieldId: false,
    connectRootFieldId: false,
  }

  FieldConnectable.contextTypes = {
    field: propTypeFieldContext,
  }

  return FieldConnectable
}
