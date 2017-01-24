import Im from 'immutable'
import { createAction, createReducer } from 'redux-act'
import { createSelector } from 'reselect'


// Actions

export const close = createAction('Close')
export const openMenu = createAction('Open Menu')
export const openSearch = createAction('Open Search')
export const openLogin = createAction('Open Login')
export const openRegister = createAction('Open Register')


// Reducer

const initialState = Im.fromJS({
  type: 'none',
  props: {},
})

export default createReducer({
  [close]: () =>
    initialState,
  [openMenu]: () =>
    initialState.set('type', 'menu'),
  [openSearch]: () =>
    initialState.set('type', 'search'),
  [openLogin]: () =>
    initialState.set('type', 'login'),
  [openRegister]: () =>
    initialState.set('type', 'register'),
}, initialState)


// Selectors

export const selectOverlay = (state) => state.overlay


export const selectOverlayShow = createSelector(
  selectOverlay,
  (overlay) => overlay.get('type') !== 'none',
)
