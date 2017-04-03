import React from 'react'


export default function Image({ source, title, ...restProps }) {
  return <img {...restProps} src={source} alt={title} />
}


Image.propTypes = {
  source: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
}
