/**
 * A link to a certain page, an anchor tag
 */

import styled from 'styled-components'

const A = styled.a`
  cursor: pointer;
  color: ${({ theme }) => theme.palette.primary};

  &:hover {
    color: ${({ theme }) => theme.palette.primaryDark};
  }
`

export default A
