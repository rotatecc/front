/**
 * Hero
 */


import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'styletron-react'

import { expandStyles } from '../../utils'

import { breakpointMax } from '../../mixins'

import H2 from '../H2'


const height = '350px'


const Wrapper = styled('div', expandStyles(
  'fullWidth',
  `h/${height}`,
  'bgc/~black',
  'c/~white',
))

const PageWidth = styled('div', expandStyles(
  'd/flex',
  'w/1250px',
  `h/${height}`,
  'm/0/auto',
  'fAlign/center',

  breakpointMax('desktop', expandStyles('w/95%')),

  breakpointMax('mobile', expandStyles('w/100%')),
))

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
  title: PropTypes.string,
}

export default Hero
