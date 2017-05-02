import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import * as windowDuck from '@/ducks/window'


class WindowWatcher extends React.Component {
  componentWillMount() {
    // Trigger window listeners manually before mount
    this.props.onWindowResize()
    this.props.onWindowScroll()
  }

  componentDidMount() {
    // Attach window listeners
    window.addEventListener('resize', this.props.onWindowResize)
    window.addEventListener('scroll', this.props.onWindowScroll)
  }

  componentWillUnmount() {
    // Remove window listeners
    window.removeEventListener('resize', this.props.onWindowResize)
    window.removeEventListener('scroll', this.props.onWindowScroll)
  }

  render() {
    return null
  }
}

WindowWatcher.propTypes = {
  onWindowResize: PropTypes.func.isRequired,
  onWindowScroll: PropTypes.func.isRequired,
}

function mapDispatchToProps(dispatch) {
  return {
    onWindowResize: () => {
      // get size object from window
      const size = {
        width: window.innerWidth,
        height: window.innerHeight,
      }

      return dispatch(windowDuck.resize(size))
    },
    onWindowScroll: () => {
      // get size object from window or document
      const scroll = {
        left: window.pageXOffset || document.documentElement.scrollLeft,
        top: window.pageYOffset || document.documentElement.scrollTop,
      }

      return dispatch(windowDuck.scroll(scroll))
    },
  }
}

export default connect(null, mapDispatchToProps)(WindowWatcher)
