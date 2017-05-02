import React from 'react'
import PropTypes from 'prop-types'

import { propIsCheckableType } from '../../utils'

import canConnectField from '../Field/canConnectField'

import Checkable from '../Checkable'


function CheckableSet({ name, type, disabled, items }) {
  return (
    <div>
      {items.map((item, i) =>
        <Checkable key={i} name={name} type={type} disabled={disabled} {...item} />)}
    </div>
  )
}


CheckableSet.propTypes = {
  name: PropTypes.string,
  type: propIsCheckableType.isRequired,
  disabled: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.object), // a bit naive
}


export default canConnectField(CheckableSet, 'name', true)
