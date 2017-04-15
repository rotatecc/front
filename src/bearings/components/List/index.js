import React from 'react'
import PropTypes from 'prop-types'

import Li from './Li'
import Ul from './Ul'
import Ol from './Ol'


function List({ ordered, items }) {
  const component = ordered ? Ol : Ul

  const children = items.map((item, i) =>
    <Li key={i}>{item}</Li>)

  return React.createElement(component, null, children)
}

List.propTypes = {
  ordered: PropTypes.bool,
  items: PropTypes.array,
}

export default List
