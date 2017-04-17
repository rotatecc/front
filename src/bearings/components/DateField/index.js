import React from 'react'
import InputField from '../InputField'


export default function DateField(props) {
  return React.createElement(InputField, { ...props, type: 'date' })
}
