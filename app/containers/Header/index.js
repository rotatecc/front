import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import PrimaryHeader from './PrimaryHeader';
import SlimHeader from './SlimHeader';

import {
  selectWindowScrollTop,
  selectMenuOverlay,
  selectSearchOverlay,
} from 'containers/App/selectors';

import {
  toggleMenuOverlay,
  toggleSearchOverlay,
} from 'containers/App/actions';


const HeaderWrapper = styled.div`
  background: #ffffff;
  position: relative;
`;


class Header extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <HeaderWrapper>
        <PrimaryHeader {...this.props} />
        <SlimHeader {...this.props} />
      </HeaderWrapper>
    );
  }
}

Header.propTypes = {
  // props
  scrollTop: React.PropTypes.number.isRequired, // eslint-disable-line react/no-unused-prop-types
  menuOverlay: React.PropTypes.bool.isRequired, // eslint-disable-line react/no-unused-prop-types
  searchOverlay: React.PropTypes.bool.isRequired, // eslint-disable-line react/no-unused-prop-types

  // actions
  onMenuIconClick: React.PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
  onSearchIconClick: React.PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
};


const mapStateToProps = createStructuredSelector({
  scrollTop: selectWindowScrollTop(),
  menuOverlay: selectMenuOverlay(),
  searchOverlay: selectSearchOverlay(),
});


function mapDispatchToProps(dispatch) {
  return {
    onMenuIconClick: () => dispatch(toggleMenuOverlay()),
    onSearchIconClick: () => dispatch(toggleSearchOverlay()),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);
