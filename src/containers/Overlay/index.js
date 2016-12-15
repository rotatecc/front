import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import * as overlayDuck from '@/ducks/overlay'


const Container = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  z-index: 100;
`

function requireAdapter(adapter) {
  return require(`./adapters/${adapter}`).default // eslint-disable-line global-require, import/no-dynamic-require
}

function adapt(overlay) {
  switch (overlay.get('type')) {
    case 'menu':
      return requireAdapter('Menu')
    case 'search':
      return requireAdapter('Search')
    default:
      return null
  }
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
            const Adapted = adapt(overlay)

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
