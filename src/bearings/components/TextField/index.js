import React from 'react'
import InputField from '../InputField'


export default function TextField(props) {
  return React.createElement(InputField, { ...props, type: 'text' })
}
