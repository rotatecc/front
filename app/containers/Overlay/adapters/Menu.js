import React from 'react';
import styled from 'styled-components';
import { Row, Column } from 'hedron';

import Close from '../Close';

import Logo from 'components/Logo';


const Container = styled.div`
  background: rgba(255, 255, 255, 0.95);
  position: relative;
  height: 100vh;
  width: 100%;
  overflow-y: scroll;
`;

const LogoWrapper = styled.div`
  padding: 25px 0 5px;
`;

function ListItem({ title }) {
  return (
    <li>
      <a href="">{title}</a>
    </li>
  );
}

ListItem.propTypes = {
  title: React.PropTypes.string.isRequired,
  // TODO
};

const ListSectionContainer = styled.div`
  margin-bottom: 3rem;

  h6 {
    margin: 0 0 .8rem;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      display: block;
      margin-bottom: 1px;

      a {
        display: block;
        padding: 2px 0;
        color: ${({ theme }) => (theme.palette.primary)};
        text-decoration: none;
        font-size: .8rem;
        transition: all 400ms ease;

        &:hover {
          color: ${({ theme }) => (theme.palette.primaryDark)};
          transform: translate(5px, 0);
        }
      }
    }
  }
`;

function ListSection({ title, items }) {
  return (
    <ListSectionContainer>
      <h6>{title}</h6>
      <ul>
        {items.map((item, i) => <ListItem key={i} {...item} />)}
      </ul>
    </ListSectionContainer>
  );
}

ListSection.propTypes = {
  title: React.PropTypes.string.isRequired,
  items: React.PropTypes.array.isRequired,
};

function Menu({ close }) {
  return (
    <Container>
      <Close onClick={close} />
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
  );
}

Menu.propTypes = {
  close: React.PropTypes.func.isRequired,
};

export default Menu;
