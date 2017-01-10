import Im from 'immutable'
import { createAction, createReducer } from 'redux-act'
import { put, call, takeLatest } from 'redux-saga/effects'
import { createSelector } from 'reselect'

import { request, saveAccessToken, formSaga } from '@/utils'


// Actions

export const receiveMe = createAction('Receive Me', (user) => user)

export const login = createAction('Login', (email, password) => ({ email, password }))
export const submitLoginForm = createAction('Submit Login Form', (fields) => fields)


// Reducer

const initialState = Im.fromJS({
  me: null,
})

export default createReducer({
  [receiveMe]: (state, user) =>
    state.set('me', Im.fromJS(user)),
}, initialState)


// Selectors

export const selectAuth = (state) => state.auth

export const selectMe = createSelector(
  selectAuth,
  (auth) => auth.get('me'),
)


// Sagas


/**
 * Get the details of the logged-in user
 * @return {Generator}
 */
export function* meSaga() {
  return yield call(request, { endpoint: '/auth' })
}


/**
 * Log in (action with email/password -> save token -> request user -> store user)
 * @return {Generator}
 */
export function* loginSaga({ payload: { email, password } }) {
  try {
    const token = yield call(request, { endpoint: '/auth/login', method: 'post', data: { email, password } })
    saveAccessToken(token)
    const user = yield call(meSaga)
    yield put(receiveMe(user))
  } catch (err) {
    // TODO distinguish between user error and other errors
    throw err
  }
}


/**
 * Handle login form submission
 * Forwards to the generic formSaga and loginSaga
 */
export function* submitLoginFormSaga({ payload: { email, password } }) {
  yield call(formSaga, 'login', loginSaga, login(email, password))
}


/**
 * Watch for actions
 */
export function* watcherSaga() {
  yield [
    takeLatest(login.getType(), loginSaga),
    takeLatest(submitLoginForm.getType(), submitLoginFormSaga),
  ]
}
