import React from 'react'
import { Link } from 'react-router'


function Item({ to, name }) {
  return (
    <li>
      <Link to={to} title={name} activeClassName={'active'}>
        {name}
      </Link>
    </li>
  )
}

Item.propTypes = {
  to: React.PropTypes.string,
  name: React.PropTypes.string,
}

export default Item
