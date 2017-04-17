import React from 'react'
import CheckableSet from '../CheckableSet'


export default function CheckboxSet(props) {
  return React.createElement(CheckableSet, { ...props, type: 'checkbox' })
}
