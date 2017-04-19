import React from 'react'
import { styled } from 'styletron-react'

import { expandStyles } from '@/bearings'


const Wrapper = styled('div', expandStyles(
  'fullWidth',
  'h/100px',
  'mTop/35px',
  'bgc/~colorMoody',
  'c/~white',
))

const currentYear = (new Date()).getFullYear()

export default function Footer() {
  return (
    <Wrapper>
      &copy;{currentYear} rotate.cc
    </Wrapper>
  )
}
