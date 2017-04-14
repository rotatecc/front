import React from 'react'
import { styled } from 'styletron-react'

import { Row, Column, H6, expandStyles } from '@/bearings'
import Logo from '@/components/Logo'

import Close from '../Close'


const Container = styled('div', expandStyles(
  'relative',
  'h/100vh',
  'fullWidth',
  'bgc/rgba(255, 255, 255, 0.95)',
  'overY/auto',
))


const LogoWrapper = styled('div', expandStyles('p/25px/0/5px'))


const ListItemLi = styled('li', expandStyles('d/block', 'mBottom/1px'))


const ListItemA = styled('a', {
  ...expandStyles('d/block', 'p/2px/0', 'c/~brandPrimary', 'fs/0.8rem', 'tDecor/none'),

  transition: 'all 400ms ease',

  ':hover': {
    ...expandStyles('c/~brandPrimary~dark'),
    transform: 'translateX(5px)',
  },
})


function ListItem({ title }) {
  return (
    <ListItemLi>
      <ListItemA href="">{title}</ListItemA>
    </ListItemLi>
  )
}

ListItem.propTypes = {
  title: React.PropTypes.string.isRequired,
  // TODO
}

const ListSectionContainer = styled('div', expandStyles('mBottom/3rem'))

const ListSectionH6 = styled(H6, expandStyles('m/0/0/0.8rem'))

const ListSectionUl = styled('ul', expandStyles('m/0', 'p/0', 'noListStyle'))

function ListSection({ title, items }) {
  return (
    <ListSectionContainer>
      <ListSectionH6>{title}</ListSectionH6>
      <ListSectionUl>
        {items.map((item, i) => <ListItem key={i} {...item} />)}
      </ListSectionUl>
    </ListSectionContainer>
  )
}

ListSection.propTypes = {
  title: React.PropTypes.string.isRequired,
  items: React.PropTypes.array.isRequired,
}

function Menu({ close }) {
  return (
    <Container>
      <Close color="black" onClick={close} />
      <LogoWrapper>
        <Logo version={'primary'} />
      </LogoWrapper>
      <Row>
        <Column lg={8} lgShift={2}>
          <Row>
            <Column sm={6} md={3}>
              <ListSection
                title="Build"
                items={[
                  { title: 'One' },
                  { title: 'Two' },
                  { title: 'Three' },
                  { title: 'Four' },
                  { title: 'Five' },
                ]}
              />
            </Column>
            <Column sm={6} md={3}>
              <ListSection
                title="Knowledge"
                items={[
                  { title: 'One' },
                  { title: 'Two' },
                  { title: 'Three' },
                  { title: 'Four' },
                  { title: 'Five' },
                ]}
              />
            </Column>
            <Column sm={6} md={3}>
              <ListSection
                title="Community"
                items={[
                  { title: 'One' },
                  { title: 'Two' },
                ]}
              />
            </Column>
            <Column sm={6} md={3}>
              <ListSection
                title="About"
                items={[
                  { title: 'About' },
                  { title: 'Contact' },
                ]}
              />
            </Column>
          </Row>
        </Column>
      </Row>
    </Container>
  )
}

Menu.propTypes = {
  close: React.PropTypes.func.isRequired,
}

export default Menu
