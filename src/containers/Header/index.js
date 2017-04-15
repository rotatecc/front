import React from 'react'
import PropTypes from 'prop-types'
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
  scrollTop: PropTypes.number.isRequired, // eslint-disable-line react/no-unused-prop-types

  // actions
  onMenuIconClick: PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types, max-len
  onSearchIconClick: PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types, max-len
  onClickLogin: PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types, max-len
  onClickRegister: PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types, max-len
}


const mapStateToProps = createStructuredSelector({
  scrollTop: windowDuck.selectWindowScrollTop,
})


export function mapDispatchToProps(dispatch) {
  return {
    onMenuIconClick: () => dispatch(overlayDuck.openMenu()),
    onSearchIconClick: () => dispatch(overlayDuck.openSearch()),
    onClickLogin: () => dispatch(overlayDuck.openLogin()),
    onClickRegister: () => dispatch(overlayDuck.openRegister()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header)
