import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'styletron-react'

import { Row, Column, H6, expandStyles } from '@/bearings'
import Logo from '@/components/Logo'


const LogoWrapper = styled('div', expandStyles(
  'pTop/25px',
  'pBottom/5px',
))


const ListItemLi = styled('li', expandStyles('d/block', 'mBottom/1px'))


const ListItemA = styled('a', expandStyles(
  'd/block',
  'p/2px/0',
  'c/~brandPrimary',
  'fs/0.8rem',
  'tDecor/none',
  'trans/all 400ms ease',

  { ':hover': expandStyles('c/~brandPrimary~dark', 'transform/translateX(5px)') },
))


function ListItem({ title }) {
  return (
    <ListItemLi>
      <ListItemA href="">{title}</ListItemA>
    </ListItemLi>
  )
}

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
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
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
}

function Menu() {
  return (
    <div>
      <LogoWrapper>
        <Logo version={'primary'} />
      </LogoWrapper>
      <Row>
        <Column>
          <Row>
            <Column>
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
            <Column>
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
            <Column>
              <ListSection
                title="Community"
                items={[
                  { title: 'One' },
                  { title: 'Two' },
                ]}
              />
            </Column>
            <Column>
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
    </div>
  )
}

export default Menu
