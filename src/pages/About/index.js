import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import {
  Hero,
  Section,
  Container,
  Row,
  Column,
  H2,
  HeroTitle,
  HeroSubtitle,
  Tile,
  Box,
  Level,
  AtCenter,
  AtLeft,
  AtRight,
  Icon,
} from '@/bearings'


function About() {
  return (
    <div>
      <Hero brand="primary" bold>
        <HeroTitle>About</HeroTitle>
        <HeroSubtitle>This is the about page</HeroSubtitle>
      </Hero>
      <Section>
        <Container>
          <Row columnsTablet="one-half">
            <Column>
              <H2>About</H2>
              <Level alignItems="center">
                <AtLeft>Hi!</AtLeft>
                <AtCenter>This div is very, <Icon name="cc-discover" /> very, very, very, very centered</AtCenter>
                <AtRight>Hi!<br />this is a test<br />kool</AtRight>
              </Level>
            </Column>
            <Column>
              <Row columnsTiny="6">
                <Column>
                  <Box>
                    This is a box!
                  </Box>
                </Column>
                <Column>
                  <Tile brand="warning" bold>
                    This is a tile!
                  </Tile>
                </Column>
                <Column>
                  <Tile brand="light" bold>
                    This is a tile!
                  </Tile>
                </Column>
                <Column>
                  <Tile brand="light" bold>
                    This is a tile!
                  </Tile>
                </Column>
                <Column>
                  <Tile brand="light" bold>
                    This is a tile!
                  </Tile>
                </Column>
                <Column>
                  <Tile brand="light" bold>
                    This is a tile!
                  </Tile>
                </Column>
              </Row>
            </Column>
          </Row>
        </Container>
      </Section>
    </div>
  )
}

About.propTypes = {
}

const mapStateToProps = createStructuredSelector({
})

const mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(About)
