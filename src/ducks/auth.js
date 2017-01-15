import Im from 'immutable'
import { createAction, createReducer } from 'redux-act'
import { put, call, takeLatest } from 'redux-saga/effects'
import { createSelector } from 'reselect'

import { request, saveAccessToken, removeAccessToken, formSaga } from '@/utils'


// Actions

export const receiveMe = createAction('Receive Me', (user) => user)

export const initialSyncMe = createAction('Initial Sync Me')

export const login = createAction('Login', (email, password) => ({ email, password }))
export const submitLoginForm = createAction('Submit Login Form', (fields) => fields)

export const logout = createAction('Logout')


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

export const selectIsLoggedIn = createSelector(
  selectMe,
  (me) => !(me === null),
)

export const selectRole = createSelector(
  selectMe,
  (me) => me ? me.get('role') : null,
)

export const selectRoleSlug = createSelector(
  selectRole,
  (role) => role ? role.get('slug') : null,
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
 * Get logged-in user details, then put it into our store
 * @return {Generator}
 */
export function* syncMeSaga() {
  const user = yield call(meSaga)
  yield put(receiveMe(user))
}


/**
 * Get logged-in user details, then put it into our store
 * Called only once at beginning lifecycle
 * Silences unauthorized error
 * @return {Generator}
 */
export function* initialSyncMeSaga() {
  try {
    yield call(syncMeSaga)
  } catch (err) {
    // Do nothing
  }
}


/**
 * Log in (action with email/password -> save token -> request user -> store user)
 * @return {Generator}
 */
export function* loginSaga({ payload: { email, password } }) {
  try {
    const token = yield call(request, {
      endpoint: '/auth/login',
      method: 'post',
      data: { email, password },
    })

    saveAccessToken(token)

    yield call(syncMeSaga)
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
 * Logout (remove token, remove user from store)
 * @return {Generator}
 */
export function* logoutSaga() {
  removeAccessToken()
  yield put(receiveMe(null))
}


/**
 * Watch for actions
 */
export function* watcherSaga() {
  yield [
    takeLatest(login.getType(), loginSaga),
    takeLatest(submitLoginForm.getType(), submitLoginFormSaga),
    takeLatest(initialSyncMe.getType(), initialSyncMeSaga),
    takeLatest(logout.getType(), logoutSaga),
  ]
}
