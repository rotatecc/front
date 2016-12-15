import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import * as windowDuck from '@/ducks/window'
import * as overlayDuck from '@/ducks/overlay'

import PrimaryHeader from './PrimaryHeader'
import SlimHeader from './SlimHeader'


const Container = styled.div`
  background: #ffffff;
  position: relative;
`


class Header extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Container>
        <PrimaryHeader {...this.props} />
        <SlimHeader {...this.props} />
      </Container>
    )
  }
}

Header.propTypes = {
  // props
  scrollTop: React.PropTypes.number.isRequired, // eslint-disable-line react/no-unused-prop-types

  // actions
  onMenuIconClick: React.PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types, max-len
  onSearchIconClick: React.PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types, max-len
}


const mapStateToProps = createStructuredSelector({
  scrollTop: windowDuck.selectWindowScrollTop,
})


export function mapDispatchToProps(dispatch) {
  return {
    onMenuIconClick: () => dispatch(overlayDuck.openMenu()),
    onSearchIconClick: () => dispatch(overlayDuck.openSearch()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header)
