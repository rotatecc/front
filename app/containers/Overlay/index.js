import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectOverlay } from './selectors';

import { closeOverlay } from './actions';

import {
  OVERLAYTYPE_MENU,
  OVERLAYTYPE_SEARCH,
} from './constants';


function shouldShow(overlay) {
  return [
    OVERLAYTYPE_MENU,
    OVERLAYTYPE_SEARCH,
  ].includes(overlay.get('type'));
}


const Container = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  z-index: 100;
`;

function requireAdapter(adapter) {
  return require(`./adapters/${adapter}`).default;
}

function adapt(overlay) {
  switch (overlay.get('type')) {
    case OVERLAYTYPE_MENU:
      return requireAdapter('Menu');
    case OVERLAYTYPE_SEARCH:
      return requireAdapter('Search');
    default:
      return null;
  }
}

class Overlay extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { overlay } = this.props;

    const Adapted = adapt(overlay);

    return (
      <Container show={shouldShow(overlay)}>
        {Adapted && <Adapted {...overlay.props} />}
      </Container>
    );
  }
}

Overlay.propTypes = {
  // props
  overlay: React.PropTypes.object.isRequired, // eslint-disable-line react/no-unused-prop-types

  // actions
  closeOverlay: React.PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
};


const mapStateToProps = createStructuredSelector({
  overlay: selectOverlay(),
});


export function mapDispatchToProps(dispatch) {
  return {
    closeOverlay: () => dispatch(closeOverlay()),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Overlay);
