import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'styletron-react'

import { expandStyles, modalCloseClassname } from '../../utils'

import { breakpoint } from '../../mixins'

import Close from './Close'


const Container = styled('div', expandStyles(
  'fixed',
  'atTopLeft',
  'w/100vw',
  'h/100vh',
  'overX/hidden',
  'overY/hidden',
  'z/~zIndices.modal',
  'bgc/~modalBackgroundColor',

  breakpoint('tablet', expandStyles(
    'd/flex',
    'fAlignItems/center',
    'fJustifyContent/center',
  )),
))


class Modal extends React.PureComponent {
  onClick = (e) => {
    if (e.target.className.includes(modalCloseClassname)) {
      this.props.onClose(e)
    }
  }

  render() {
    const { children, onClose } = this.props

    return (
      <Container className={modalCloseClassname} onClick={this.onClick}>
        {onClose && <Close onClick={onClose} />}
        {children}
      </Container>
    )
  }
}

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
}

export default Modal
