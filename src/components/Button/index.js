/**
 *
 * Button.react.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { PropTypes, Children } from 'react'

import A from './A'
import StyledButton from './StyledButton'
import Wrapper from './Wrapper'


function Button(props) {
  // Render an anchor tag
  let button = (
    <A href={props.href}>
      {Children.toArray(props.children)}
    </A>
  )

  // If the Button has a handleRoute prop
  // or is a type=[button|submit], we want to render a button
  if (props.handleRoute || (props.type === 'button' || props.type === 'submit')) {
    button = (
      <StyledButton onClick={props.handleRoute} type={props.type}>
        {Children.toArray(props.children)}
      </StyledButton>
    )
  }

  return (
    <Wrapper>
      {button}
    </Wrapper>
  )
}

Button.propTypes = {
  handleRoute: PropTypes.func,
  href: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Button
