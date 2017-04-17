import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'

import { propIsInputFieldType, Button, Label, FieldGroup, InputField } from '@/bearings'

import validate from './validate'


const formName = 'login'


const LoginFormField = ({ input, label, type, meta }) => {
  const { touched, error } = meta

  return (
    <FieldGroup>
      <Label>{label}</Label>
      <InputField {...input} type={type} />
      {touched && error && <span>{error}</span>}
    </FieldGroup>
  )
}

LoginFormField.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  type: propIsInputFieldType.isRequired,
}


// The form

const LoginForm = ({ handleSubmit, submitting, error }) =>
  <form onSubmit={handleSubmit}>
    <Field name="email" label="Email" component={LoginFormField} type="text" />
    <Field name="password" label="Password" component={LoginFormField} type="password" />
    <div>
      <Button type="submit" brand="primary" size="normal" disabled={submitting}>Log in</Button>
      {error}
    </div>
  </form>

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  error: PropTypes.string,
}


export default reduxForm({
  form: formName,
  validate,
})(LoginForm)
