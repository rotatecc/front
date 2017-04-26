import React from 'react'
import PropTypes from 'prop-types'

import { propIsCheckableType } from '../../utils'

import canConnectFieldId from '../Field/canConnectFieldId'

import Checkable from '../Checkable'


function CheckableSet({ name, type, items }) {
  return (
    <div>
      {items.map((item, i) => <Checkable key={i} name={name} type={type} {...item} />)}
    </div>
  )
}


CheckableSet.propTypes = {
  name: PropTypes.string,
  type: propIsCheckableType.isRequired,
  items: PropTypes.arrayOf(PropTypes.object), // a bit naive
}


export default canConnectFieldId(CheckableSet, 'name', false)
