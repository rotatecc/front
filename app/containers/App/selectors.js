/**
 * The global state selectors
 */

// import { createSelector } from 'reselect';


// TODO selectors here using reselect.createSelector (export them below)

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
  // export them here
  selectLocationState,
};
