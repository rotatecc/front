import React from 'react'
import PropTypes from 'prop-types'

import { propTypeFieldContext } from '../../utils'


export const makeFieldMetaToPropsFn = (which) =>
  (meta, props, switches = {}) =>
    which.filter((x) => x).reduce(
      (acc, field) => {
        const { from, to, always } = typeof field === 'object' ? field : {
          from: field,
          to: field,
          always: true,
        }

        const sw = switches[from]
        if (sw === false || (typeof sw === 'undefined' && !always)) {
          return acc
        }

        const result = props[to] || (meta && meta[from])

        if (typeof result !== 'undefined') {
          return { ...acc, [to]: result }
        }

        return acc
      },
      {},
    )


/**
 * Make HOC for component intended as a descendent of a Field
 *
 * Applies meta-props from field context as actual props,
 * and allows field id (optionally under a different prop name)
 * to be set automatically
 *
 * The resulting HOC can be supplied four helper props:
 * - bypass: completely bypass FieldConnectable mechanics
 * - useRoot: use field context root meta instead of parent meta
 * - connectId: connect parent field id when available
 * - connectRootId: connect root field id when available
 *
 * @param  {React.component}  component
 * @param  {String|null}  [keyAttr=null] Set unique field id under this prop name (ex. htmlFor)
 * @param  {Boolean} [alwaysId=false] Always apply id if available (unless connectId
 *                                    is explicity set to bool false)
 * @return {React.component}          Higher-order component ("FieldConnectable")
 */
export default function canConnectField(
  component,
  keyAttrMaybe = null, // ex. 'id', 'htmlFor', 'name', 'etc'
  alwaysId = false,
  whichMeta = ['brand', 'size', 'disabled', 'horizontal', 'grouped', 'addons'],
) {
  const metaMerger = makeFieldMetaToPropsFn(whichMeta)

  const idMerger = makeFieldMetaToPropsFn([
    keyAttrMaybe && { from: 'id', to: keyAttrMaybe, always: alwaysId },
  ])

  const FieldConnectable = (props, context) => {
    const { field } = context

    const {
      bypass, // completely bypass field connection (id and meta)
      useRoot, // use root Field for meta
      connectId, // connect parent Field id
      connectRootId, // connect root Field id
      ...restProps
    } = props

    if (typeof field !== 'object' || bypass) {
      // Bypass everything
      return React.createElement(component, restProps)
    }

    const desiredMeta = field[useRoot ? 'rootMeta' : 'meta']

    const finalMetaProps = metaMerger(
      desiredMeta,
      restProps,
    )

    const finalIdProps = idMerger(
      field[connectRootId ? 'rootMeta' : 'meta'],
      restProps,
      { id: typeof connectRootId !== 'undefined' ? connectRootId : connectId },
    )

    return React.createElement(component, {
      fieldMeta: desiredMeta,
      ...restProps,
      ...finalMetaProps,
      ...finalIdProps,
    })
  }

  FieldConnectable.propTypes = {
    connectId: PropTypes.bool,
    connectRootId: PropTypes.bool,
    bypass: PropTypes.bool, // has default
    useRoot: PropTypes.bool, // has default
  }

  FieldConnectable.defaultProps = {
    // connectId/connectRootId should be undefined
    // since mergeFieldMeta differentiates bool false
    bypass: false,
    useRoot: false,
  }

  FieldConnectable.contextTypes = {
    field: propTypeFieldContext,
  }

  return FieldConnectable
}
