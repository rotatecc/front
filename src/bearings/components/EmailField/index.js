import React from 'react'
import InputField from '../InputField'


export default function EmailField(props) {
  return React.createElement(InputField, { ...props, type: 'email' })
}
