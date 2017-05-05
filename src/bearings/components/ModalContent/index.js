import React from 'react'
import { styled } from 'styletron-react'
import PropTypes from 'prop-types'

import { expandStyles, modalCloseClassname as mcc } from '../../utils'

import { breakpoint } from '../../mixins'

import Container from '../Container'
import Row from '../Row'
import Column from '../Column'
import Box from '../Box'


const Fence = styled('div', expandStyles(
  'relative',
  'm/60px/20px/30px',
  'hMax/calc(100vh - 90px)',
  'w/calc(100vw - 40px)',
  'overY/auto',
  'overX/auto',

  breakpoint('tablet', expandStyles(
    'm/30px/20px/30px',
    'hMax/calc(100vh - 60px)',
  )),
))


export default function ModalContent({ column, boxed, children }) {
  const childrenFinal = React.createElement(boxed ? Box : 'div', null, children)

  return (
    <Fence className={mcc}>
      <Container className={mcc} fluid>
        <Row className={mcc} tablet="justify-content:center">
          <Column className={mcc} tablet={column}>
            {childrenFinal}
          </Column>
        </Row>
      </Container>
    </Fence>
  )
}

ModalContent.propTypes = {
  column: PropTypes.string.isRequired, // has default
  boxed: PropTypes.bool,

  children: PropTypes.node,
}

ModalContent.defaultProps = {
  column: '4',
}
