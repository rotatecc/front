import React from 'react'
import InputField from '../InputField'


export default function NumberField(props) {
  return React.createElement(InputField, { ...props, type: 'number' })
}
