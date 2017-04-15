import React, { PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'

import { Button, Label, TextField } from '@/bearings'

import validate from './validate'


const formName = 'login'


const LoginFormField = ({ input, label, type, meta }) => {
  const { asyncValidating, touched, error } = meta
  const id = `redux-form-${formName}-${input.name}`

  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <div className={asyncValidating ? 'async-validating' : ''}>
        <TextField {...input} id={id} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  )
}

LoginFormField.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
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
