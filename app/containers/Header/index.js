import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import PrimaryHeader from './PrimaryHeader';
import SlimHeader from './SlimHeader';

import {
  selectWindowScrollTop,
} from 'containers/App/selectors';

import {
  openMenuOverlay,
  openSearchOverlay,
} from 'containers/Overlay/actions';


const Container = styled.div`
  background: #ffffff;
  position: relative;
`;


class Header extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Container>
        <PrimaryHeader {...this.props} />
        <SlimHeader {...this.props} />
      </Container>
    );
  }
}

Header.propTypes = {
  // props
  scrollTop: React.PropTypes.number.isRequired, // eslint-disable-line react/no-unused-prop-types

  // actions
  onMenuIconClick: React.PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
  onSearchIconClick: React.PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
};


const mapStateToProps = createStructuredSelector({
  scrollTop: selectWindowScrollTop(),
});


export function mapDispatchToProps(dispatch) {
  return {
    onMenuIconClick: () => dispatch(openMenuOverlay()),
    onSearchIconClick: () => dispatch(openSearchOverlay()),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);
