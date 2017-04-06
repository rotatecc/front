import React from 'react'
import { styled } from 'styletron-react'

import { Row, Column, expandStyles } from '@/bearings'


const Container = styled('div', expandStyles(
  'fullWidth',
  'h/100px',
  'mTop/35px',
  'bgc/~brandMoody',
  'c/~white',
))

const currentYear = (new Date()).getFullYear()

export default function Footer() {
  return (
    <Container>
      <Row>
        <Column xs={6}>
          &copy;{currentYear} rotate.cc
        </Column>
        <Column xs={6}>
          Menu
        </Column>
      </Row>
    </Container>
  )
}
