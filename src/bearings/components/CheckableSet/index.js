import React from 'react'
import PropTypes from 'prop-types'

import { propIsCheckableType } from '../../utils'

import Checkable from '../Checkable'


export default function CheckableSet({ type, items }) {
  return (
    <div>
      {items.map((item, i) => <Checkable key={i} type={type} {...item} />)}
    </div>
  )
}


CheckableSet.propTypes = {
  type: propIsCheckableType.isRequired,
  items: PropTypes.arrayOf(PropTypes.object), // a bit naive
}
