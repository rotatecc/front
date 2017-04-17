import React from 'react'
import CheckableSet from '../CheckableSet'


export default function RadioSet(props) {
  return React.createElement(CheckableSet, { ...props, type: 'radio' })
}
