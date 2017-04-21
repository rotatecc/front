import PropTypes from 'prop-types'

import { styled } from 'styletron-react'

import { expandStyles } from '../../utils'


const Section = styled('div', expandStyles(
  'fullWidth',

  'pTop/3rem',
  'pBottom/3rem',

  'bgc/~sectionBackgroundColor',
))


Section.propTypes = {
  children: PropTypes.node,
}


export default Section
