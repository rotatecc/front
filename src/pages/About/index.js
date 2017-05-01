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
  FieldFeedbackSet,
  FieldHelp,
  Label,
  Button,
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
              <Field brand="success" horizontal grouped size="small">
                <Label>Facebook profile</Label>
                <Field expanded>
                  <Control>
                    <AtLeft><Icon name="facebook" /></AtLeft>
                    <TextInput connectRootId />
                  </Control>
                  <FieldFeedbackSet
                    success="It worked!"
                    info="You might try this."
                    danger="Bad!"
                  />
                  <FieldHelp>Enter your Facebook profile id</FieldHelp>
                </Field>
                hello
              </Field>
              <Field brand="warning" addons size="small">
                <Label>Instagram</Label>
                <Control expanded>
                  <AtLeft><Icon name="instagram" /></AtLeft>
                  <TextInput />
                </Control>
                <Control>
                  <AtLeft><Icon name="folder-open-o" /></AtLeft>
                  <Select connectRootId>
                    <option>You</option>
                  </Select>
                </Control>
                <Button>Submit</Button>
              </Field>
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
