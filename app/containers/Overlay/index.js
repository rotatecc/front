import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectOverlay } from './selectors';

import { closeOverlay } from './actions';

import Button from 'components/Button';


function shouldShow(overlay) {
  return overlay.get('type') !== 'none';
}


const Container = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
  background: #ffffff;
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  z-index: 100;
`;


class Overlay extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Container show={shouldShow(this.props.overlay)}>
        This is the overlay.
        <Button onClick={this.props.closeOverlay}>
          Close
        </Button>
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
