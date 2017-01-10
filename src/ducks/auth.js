import Im from 'immutable'
import { createAction, createReducer } from 'redux-act'
import { call, takeLatest } from 'redux-saga/effects'

import { request, saveAccessToken, formSaga } from '@/utils'


// Actions

export const login = createAction('Login', (email, password) => ({ email, password }))
export const submitLoginForm = createAction('Submit Login Form', (fields) => fields)

// Reducer

const initialState = Im.fromJS({
  // TODO
})

export default createReducer({
  // TODO
}, initialState)


// Selectors

// TODO

// Sagas


export function* loginSaga({ payload: { email, password } }) {
  try {
    const token = yield call(request, { endpoint: '/auth/login', method: 'post', data: { email, password } })
    saveAccessToken(token)
    return token
  } catch (err) {
    // TODO distinguish between user error and other error
    throw err
  }
}


export function* submitLoginFormSaga({ payload: { email, password } }) {
  yield call(formSaga, 'login', loginSaga, login(email, password))
}


export function* watcherSaga() {
  yield [
    takeLatest(login.getType(), loginSaga),
    takeLatest(submitLoginForm.getType(), submitLoginFormSaga),
  ]
}
