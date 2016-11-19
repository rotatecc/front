/*
 * Window reducer (domain in app reducer)
 */

import { fromJS } from 'immutable';

import {
  WINDOW_RESIZE,
  WINDOW_SCROLL,
} from './constants';


const initialState = fromJS({
  width: 0, // viewport width (not document)
  height: 0, // viewport height (not document)
  left: 0, // scrollLeft
  top: 0, // scrollTop
});

export default function windowReducer(state = initialState, action = {}) {
  const { type, payload, error } = action; // eslint-disable-line no-unused-vars

  switch (type) {
    case WINDOW_RESIZE: {
      return state
        .set('width', payload.width)
        .set('height', payload.height);
    }
    case WINDOW_SCROLL: {
      return state
        .set('left', payload.left)
        .set('top', payload.top);
    }
    default:
      return state;
  }
}
