import React from 'react'
import InputField from '../InputField'


export default function PasswordField(props) {
  return React.createElement(InputField, { ...props, type: 'password' })
}