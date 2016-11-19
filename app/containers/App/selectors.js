/**
 * The global state selectors
 */

import { createSelector } from 'reselect';


const selectGlobal = () => (state) => state.get('global');

const selectWindow = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('window')
);

const selectWindowScrollTop = () => createSelector(
  selectWindow(),
  (windowState) => windowState.get('top')
);

const selectWindowWidth = () => createSelector(
  selectWindow(),
  (windowState) => windowState.get('width')
);

const selectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

export {
  selectGlobal,
  selectWindow,
  selectWindowScrollTop,
  selectWindowWidth,
  selectLocationState,
};
