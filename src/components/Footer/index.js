import React from 'react'
import { styled } from 'styletron-react'

import { expandStyles, Container } from '@/bearings'


const Wrapper = styled('div', expandStyles(
  'fullWidth',
  'h/100px',
  'mTop/35px',
  'bgc/~colorMoody',
  'c/~white',
  'd/flex',
  'fAlignItems/center',
))

const currentYear = (new Date()).getFullYear()

export default function Footer() {
  return (
    <Wrapper>
      <Container>
        &copy;{currentYear} rotate.cc
      </Container>
    </Wrapper>
  )
}
