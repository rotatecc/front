import React from 'react'
import { styled } from 'styletron-react'

import { expandStyles } from '../../utils'

import { mediaWidthRange } from '../../mixins'


const Wrapper = styled('div', {
  ...expandStyles(
    'fullWidth',
    'h/350px',
    'bgc/p~black',
    'c/p~white',
  ),
})

const PageWidth = styled('div', {
  ...expandStyles(
    'd/flex',
    'w/1250px',
    'm/0/auto',
  ),

  ...mediaWidthRange(null, '1300px', {
    ...expandStyles('w/95%'),
  }),

  ...mediaWidthRange(null, '768px', {
    ...expandStyles('w/100%'),
  }),
})

const Inner = styled('div', {
  alignSelf: 'center',
})


function Hero() {
  return (
    <Wrapper>
      <PageWidth>
        <Inner>
          <h2>About</h2>
        </Inner>
      </PageWidth>
    </Wrapper>
  )
}

Hero.propTypes = {
}

export default Hero
