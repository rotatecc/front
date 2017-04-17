import React from 'react'

import Checkable from '../Checkable'


export default function Checkbox(props) {
  return React.createElement(Checkable, { ...props, type: 'checkbox' })
}
