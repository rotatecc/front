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

const selectMenuOverlay = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('menuOverlay')
);

const selectSearchOverlay = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('searchOverlay')
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
  selectMenuOverlay,
  selectSearchOverlay,
  selectLocationState,
};
