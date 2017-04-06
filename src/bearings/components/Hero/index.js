/**
 * Hero
 */


import React from 'react'
import { styled } from 'styletron-react'

import { expandStyles } from '../../utils'

import { mediaWidthRange } from '../../mixins'

import H2 from '../H2'


const height = '350px'


const Wrapper = styled('div', expandStyles(
  'fullWidth',
  `h/${height}`,
  'bgc/~black',
  'c/~white',
))

const PageWidth = styled('div', {
  ...expandStyles(
    'd/flex',
    'w/1250px',
    `h/${height}`,
    'm/0/auto',
    'fAlign/center',
  ),

  ...mediaWidthRange(null, '1300px', expandStyles('w/95%')),

  ...mediaWidthRange(null, '768px', expandStyles('w/100%')),
})

const Inner = styled('div', {})

const Title = styled(H2, expandStyles('fs/3.5rem'))


function Hero({ title }) {
  return (
    <Wrapper>
      <PageWidth>
        <Inner>
          <Title>{title}</Title>
        </Inner>
      </PageWidth>
    </Wrapper>
  )
}

Hero.propTypes = {
  title: React.PropTypes.string,
}

export default Hero
