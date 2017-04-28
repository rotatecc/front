import React from 'react'
import PropTypes from 'prop-types'
import { Field as ReduxFormField, reduxForm } from 'redux-form'

import { propIsInputType, Button, Label, Field, Input } from '@/bearings'

import validate from './validate'


const formName = 'login'


const LoginFormField = ({ input, label, type, meta }) => {
  const { touched, error } = meta

  return (
    <Field>
      <Label>{label}</Label>
      <Input {...input} type={type} connectFieldId />
      {touched && error && <span>{error}</span>}
    </Field>
  )
}

LoginFormField.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  type: propIsInputType.isRequired,
}


// The form

const LoginForm = ({ handleSubmit, submitting, error }) =>
  <form onSubmit={handleSubmit}>
    <ReduxFormField name="email" label="Email" component={LoginFormField} type="text" />
    <ReduxFormField name="password" label="Password" component={LoginFormField} type="password" />
    <div>
      <Button type="submit" brand="default" size="normal" disabled={submitting}>Log in</Button>
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
