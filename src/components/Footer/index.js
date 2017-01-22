import React from 'react'
import styled from 'styled-components'
import { Row, Column } from 'hedron'


const Container = styled.div`
  height: 100px;
  width: 100%;
  margin-top: 35px;
  background: ${({ theme }) => theme.palette.darkMeaning};
  color: ${({ theme }) => theme.palette.whiteAtNight};
`

const currentYear = (new Date()).getFullYear()

export default function Footer() {
  return (
    <Container>
      <Row>
        <Column xs={6}>
          &copy;{currentYear} rotate.cc
        </Column>
        <Column xs={6}>
          Menu
        </Column>
      </Row>
    </Container>
  )
}
