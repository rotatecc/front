import React from 'react'
import invariant from 'invariant'
import PropTypes from 'prop-types'
import { styled } from 'styletron-react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import config from '@/config'

import { expandStyles } from '@/bearings'

import * as overlayDuck from '@/ducks/overlay'

import * as adapters from './adapters'


const Container = styled('div', expandStyles(
  'bgc/rgba(0, 0, 0, 0.8)',
  'fixed',
  'w/100vw',
  'h/100vh',
  'overX/hidden',
  'overY/hidden',
  'z/~zIndices.overlay',
))

function getMatchingAdapterMaybe(overlay) {
  return adapters[overlay.get('type')] || null
}

function changeOverflowOnBody(hidden = true) {
  document.body.style.overflow = hidden ? 'hidden' : 'visible'
}

class Overlay extends React.PureComponent {
  componentDidMount() {
    changeOverflowOnBody(this.props.show)
  }

  componentDidUpdate() {
    changeOverflowOnBody(this.props.show)
  }

  componentWillUnmount() {
    changeOverflowOnBody(false)
  }

  // Actions

  onContainerClick = (e) => {
    e.persist()

    if (e.target.className.includes(config.overlayCloseClassname)) {
      this.props.closeOverlay()
    }
  }

  // Render

  render() {
    const { show, overlay } = this.props

    if (!show) {
      return null
    }

    const Adapted = getMatchingAdapterMaybe(overlay)

    invariant(
      Adapted,
      'Matching Overlay adapter was not found',
    )

    return (
      <Container
        className={config.overlayCloseClassname}
        onClick={this.onContainerClick}
      >
        <Adapted
          close={this.props.closeOverlay}
          {...overlay.props}
        />
      </Container>
    )
  }
}

Overlay.propTypes = {
  // props
  show: PropTypes.bool.isRequired,
  overlay: PropTypes.object.isRequired, // eslint-disable-line react/no-unused-prop-types

  // actions
  closeOverlay: PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
}


const mapStateToProps = createStructuredSelector({
  show: overlayDuck.selectOverlayShow,
  overlay: overlayDuck.selectOverlay,
})


export function mapDispatchToProps(dispatch) {
  return {
    closeOverlay: () => dispatch(overlayDuck.close()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Overlay)
