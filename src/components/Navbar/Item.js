import React from 'react'
import { Link } from 'react-router'
import { styled } from 'styletron-react'

import { expandStyles, mediaWidthRange } from '@/bearings'


const StyledLi = styled('li', expandStyles('d/inline-block'))


const linkStyles = {
  ...expandStyles(
    'd/block',
    'h/60px',
    'p/19px/12px',
    'fs/0.9rem',
    'c/~brandPrimary',
    'pointer',
    'decor/none',
    'ls/1px',
  ),

  transition: 'all 200ms cubic-bezier(.25,.1,.25,1)',

  ':hover': expandStyles('c/~brandPrimary~dark'),
}


const primaryLinkStyles = {
  ...mediaWidthRange(null, '1400px', expandStyles('p/19px/8px')),
}


const slimLinkStyles = {
  ...expandStyles('h/40px', 'p/8px/12px', 'c/~white'),

  ':hover': expandStyles('c/~white', 'bgc/~brandPrimary~dark'),

  ...mediaWidthRange(null, '1400px', expandStyles('p/8px/6px')),
}


const StyledRouterLink = styled(Link, linkStyles)

const StyledPlainLink = styled('a', linkStyles)

const styledLinkLookup = {
  primary: {
    router: styled(StyledRouterLink, primaryLinkStyles),
    plain: styled(StyledPlainLink, primaryLinkStyles),
  },
  slim: {
    router: styled(StyledRouterLink, slimLinkStyles),
    plain: styled(StyledPlainLink, slimLinkStyles),
  },
}


function Item({ onClick, to, name, version }) {
  const StyledLinkVersioned = styledLinkLookup[version][onClick ? 'plain' : 'router']

  const linkProps = onClick
    ? { onClick }
    : { to, title: name, activeClassName: 'active' }

  return (
    <StyledLi>
      <StyledLinkVersioned {...linkProps}>
        {name}
      </StyledLinkVersioned>
    </StyledLi>
  )
}

Item.propTypes = {
  version: React.PropTypes.oneOf(['primary', 'slim']).isRequired,
  onClick: React.PropTypes.func,
  to: React.PropTypes.string,
  name: React.PropTypes.string,
}

export default Item
