import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import * as windowDuck from '@/ducks/window'
import * as overlayDuck from '@/ducks/overlay'

import InnerHeader from './InnerHeader'


class Header extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <InnerHeader {...this.props} version="primary" />
        <InnerHeader {...this.props} version="slim" />
      </div>
    )
  }
}

Header.propTypes = {
  // props
  scrollTop: React.PropTypes.number.isRequired, // eslint-disable-line react/no-unused-prop-types

  // actions
  onMenuIconClick: React.PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types, max-len
  onSearchIconClick: React.PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types, max-len
  onClickLogin: React.PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types, max-len
  onClickRegister: React.PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types, max-len
}


const mapStateToProps = createStructuredSelector({
  scrollTop: windowDuck.selectWindowScrollTop,
})


export function mapDispatchToProps(dispatch) {
  return {
    onMenuIconClick: () => dispatch(overlayDuck.openMenu()),
    onSearchIconClick: () => dispatch(overlayDuck.openSearch()),
    onClickLogin: () => null, // TODO
    onClickRegister: () => null, // TODO
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header)
