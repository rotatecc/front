import React from 'react'
import invariant from 'invariant'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { Modal } from '@/bearings'

import * as overlayDuck from '@/ducks/overlay'

import * as adapters from './adapters'


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

  // Render

  render() {
    const { show, overlay, closeOverlay } = this.props

    if (!show) {
      return null
    }

    const Adapted = getMatchingAdapterMaybe(overlay)

    invariant(
      Adapted,
      'Matching Overlay adapter was not found',
    )

    return (
      <Modal onClose={closeOverlay}>
        <Adapted {...overlay.get('props').toJS()} />
      </Modal>
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
