import React from 'react'
import PropTypes from 'prop-types'


export default function Image({ source, title, ...restProps }) {
  return <img {...restProps} src={source} alt={title} />
}


Image.propTypes = {
  source: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
