import React from 'react'
import { styled } from 'styletron-react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { expandStyles } from '@/bearings'

import * as overlayDuck from '@/ducks/overlay'

import * as adapters from './adapters'


const Container = styled('div', ({ show }) => expandStyles(
  `d/${show ? 'block' : 'none'}`,
  'bgc/rgba(0, 0, 0, 0.8)',
  'fixed',
  'w/100vw',
  'h/100vh',
  'z/100',
  'overY/auto',
))

function getMatchingAdapterMaybe(overlay) {
  return adapters[overlay.get('type')] || null
}

function changeOverflowOnBody(hidden = true) {
  document.body.style.overflow = hidden ? 'hidden' : 'visible'
}

class Overlay extends React.PureComponent {
  // Sync body { overflow: hidden } with overlay being shown

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

    if (e.target.className.includes('should-close-overlay')) {
      this.props.closeOverlay()
    }
  }

  // Render

  render() {
    const { show, overlay } = this.props

    return (
      <Container
        className="should-close-overlay"
        onClick={this.onContainerClick}
        show={show}
      >
        {(() => {
          if (show) {
            const Adapted = getMatchingAdapterMaybe(overlay)

            if (Adapted) {
              return (
                <Adapted
                  close={this.props.closeOverlay}
                  {...overlay.props}
                />
              )
            }
          }

          return null
        })()}
      </Container>
    )
  }
}

Overlay.propTypes = {
  // props
  show: React.PropTypes.bool.isRequired,
  overlay: React.PropTypes.object.isRequired, // eslint-disable-line react/no-unused-prop-types

  // actions
  closeOverlay: React.PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
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
