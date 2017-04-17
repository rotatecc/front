import React from 'react'
import InputField from '../InputField'


export default function TelField(props) {
  return React.createElement(InputField, { ...props, type: 'tel' })
}
