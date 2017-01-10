import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const reducerNames = [
  'global',
  'window',
  'overlay',
  'progress',
  'auth',
]

const reducers = reducerNames.reduce((accum, name) =>
  ({ ...accum, [name]: require(`@/ducks/${name}`).default }), {}) // eslint-disable-line global-require, import/no-dynamic-require

// redux-form reducer
reducers.form = formReducer

const rootReducer = combineReducers(reducers)

export default rootReducer
