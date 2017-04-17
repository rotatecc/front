import Im from 'immutable'
import { createReducer } from 'redux-act'


// Actions

// none

// Reducer

const initialState = Im.fromJS({
  // none
})

export default createReducer({
  // none
}, initialState)


// Selectors

export const selectGlobal = (state) => state.global
