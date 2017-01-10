import Im from 'immutable'
import { createAction, createReducer } from 'redux-act'
import { createSelector } from 'reselect'


// Actions

export const init = createAction('Init')
export const progress = createAction('Progress', (id, percent) => ({ id, percent }))
export const complete = createAction('Complete')


// Reducer

const initialState = Im.fromJS({})

export default createReducer({
  [init]: (state, id) =>
    state.set(id, 0),
  [progress]: (state, { id, percent }) =>
    percent >= 100
      ? state.remove(id)
      : state.set(id, percent),
  [complete]: (state, id) =>
    state.remove(id),
}, initialState)


// Selectors

export const selectProgresses = (state) => state.progress

export const selectOverallProgress = createSelector(
  selectProgresses,
  (progresses) => {
    const count = progresses.count()

    if (count === 0) {
      return 100
    }

    const sum = progresses.toList().reduce((acc, v) => (acc + v), 0)

    return (sum / count)
  },
)

export const selectIsProgressing = createSelector(
  selectProgresses,
  (progresses) => !progresses.isEmpty(),
)
