import { createStore, compose, applyMiddleware } from 'redux'

import createSagaMiddleware from 'redux-saga'

import rootReducer from '@/reducer'
import rootSaga from '@/saga'


const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, undefined,
  compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f,
  ),
)

sagaMiddleware.run(rootSaga)
