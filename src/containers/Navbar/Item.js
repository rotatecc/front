import React from 'react'


function Item({ link, name }) {
  return (
    <li>
      <a href={link} title={name}>
        {name}
      </a>
    </li>
  )
}

Item.propTypes = {
  link: React.PropTypes.string,
  name: React.PropTypes.string,
}

export default Item
