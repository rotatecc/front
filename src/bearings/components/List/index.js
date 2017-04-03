import React from 'react'

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
  ordered: React.PropTypes.bool,
  items: React.PropTypes.array,
}

export default List
