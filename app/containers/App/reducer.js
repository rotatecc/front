/*
 * AppReducer
 */

import { fromJS } from 'immutable';

import windowReducer from './windowReducer';
import overlayReducer from 'containers/Overlay/reducer';


const initialState = fromJS({
  window: windowReducer(),
  overlay: overlayReducer(),
});


export default function appReducer(state = initialState, action = {}) {
  return state
    .set('window', windowReducer(state.get('window'), action))
    .set('overlay', overlayReducer(state.get('overlay'), action));
}
