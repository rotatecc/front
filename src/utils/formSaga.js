import { put, call } from 'redux-saga/effects'
import { startSubmit, stopSubmit, reset, SubmissionError } from 'redux-form'


/**
 * formSaga is a generic form mechanism that ensures the correct flow
 * of actions for redux-form given side effects to be performed,
 * and handles errors correctly
 * @param  {string}    formId      the form id (already set using redux-form)
 * @param  {function}  apiSaga     a saga that is called after submission
 * @param  {[...any]}  apiSagaArgs arguments supplied to the apiSaga
 * @return {Generator}
 */
export default function* formSaga(formId, apiSaga, ...apiSagaArgs) {
  // Start form submit
  yield put(startSubmit(formId))

  try {
    yield call(apiSaga, ...apiSagaArgs)

    // Success

    yield put(reset(formId))
    yield put(stopSubmit(formId))
  } catch (err) {
    if (err instanceof SubmissionError) {
      yield put(stopSubmit(formId, err.errors))
    } else {
      console.error(err) // eslint-disable-line no-console
      yield put(stopSubmit(formId, { _error: err.message }))
    }
  }
}
