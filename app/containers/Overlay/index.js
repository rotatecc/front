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

function changeOverflowOnBody(hidden = true) {
  document.body.style.overflow = hidden ? 'hidden' : 'visible';
}

class Overlay extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  // Sync body { overflow: hidden } with overlay being shown

  componentDidMount() {
    changeOverflowOnBody(shouldShow(this.props.overlay));
  }

  componentDidUpdate() {
    changeOverflowOnBody(shouldShow(this.props.overlay));
  }

  componentWillUnmount() {
    changeOverflowOnBody(false);
  }

  // Actions

  onContainerClick = (e) => {
    e.persist();

    if (e.target.className.includes('should-close-overlay')) {
      this.props.closeOverlay();
    }
  }

  // Render

  render() {
    const { overlay } = this.props;

    const Adapted = adapt(overlay);

    return (
      <Container
        className="should-close-overlay"
        onClick={this.onContainerClick}
        show={shouldShow(overlay)}
      >
        {Adapted && (
          <Adapted
            close={this.props.closeOverlay}
            {...overlay.props}
          />
        )}
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
