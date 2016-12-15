import Im from 'immutable'
import { createAction, createReducer } from 'redux-act'
import { createSelector } from 'reselect'


// Actions

export const resize = createAction('Resize')
export const scroll = createAction('Scroll')


// Reducer

const initialState = Im.fromJS({
  width: 0, // viewport width (not document)
  height: 0, // viewport height (not document)
  left: 0, // scrollLeft
  top: 0, // scrollTop
})

export default createReducer({
  [resize]: (state, { width, height }) =>
    state.merge({ width, height }),
  [scroll]: (state, { left, top }) =>
    state.merge({ left, top }),
}, initialState)


// Selectors

export const selectWindow = (state) => state.window

export const selectWindowScrollTop = createSelector(
  selectWindow,
  (w) => w.get('top'),
)

export const selectWindowWidth = createSelector(
  selectWindow,
  (w) => w.get('width'),
)

export const selectWindowHeight = createSelector(
  selectWindow,
  (w) => w.get('height'),
)
