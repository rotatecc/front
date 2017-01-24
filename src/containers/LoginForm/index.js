import React, { PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'

import Button from '@/components/Button'

import validate from './validate'


const formName = 'login'


// Field renderer

const renderField = ({ input, label, type, meta }) => {
  const { asyncValidating, touched, error } = meta
  const id = `redux-form-${formName}-${input.name}`

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <div className={asyncValidating ? 'async-validating' : ''}>
        <input {...input} id={id} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  )
}

renderField.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}


// The form

const LoginForm = ({ handleSubmit, submitting, error }) =>
  <form onSubmit={handleSubmit}>
    <Field name="email" label="Email" component={renderField} type="text" />
    <Field name="password" label="Password" component={renderField} type="password" />
    <div>
      <Button type="submit" disabled={submitting}>Log in</Button>
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
