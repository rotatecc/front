import React from 'react'

import Checkable from '../Checkable'


export default function Radio(props) {
  return React.createElement(Checkable, { ...props, type: 'radio' })
}
