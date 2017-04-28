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
  AtLeft,
  Icon,
  Control,
  TextInput,
  Select,
  Field,
  Label,
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
              <Field>
                <Label>Facebook profile</Label>
                <Field>
                  <Control>
                    <AtLeft><Icon name="facebook" /></AtLeft>
                    <TextInput connectRootFieldId />
                  </Control>
                </Field>
              </Field>
              <Control loading>
                <AtLeft><Icon name="instagram" /></AtLeft>
                <Select>
                  <option>Hello</option>
                </Select>
              </Control>
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
