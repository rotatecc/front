import { combineReducers } from 'redux'

const reducerNames = [
  'global',
  'window',
  'overlay',
]

const reducers = reducerNames.reduce((accum, name) =>
  ({ ...accum, [name]: require(`@/ducks/${name}`).default }), {}) // eslint-disable-line global-require, import/no-dynamic-require

const rootReducer = combineReducers(reducers)

export default rootReducer
