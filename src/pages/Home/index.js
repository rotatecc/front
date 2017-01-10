import React from 'react'
import { connect } from 'react-redux'
import { Row, Column } from 'hedron'
import { createStructuredSelector } from 'reselect'

import * as progressDuck from '@/ducks/progress'
import * as authDuck from '@/ducks/auth'

import LoginForm from '@/containers/LoginForm'


function Home({ isLoading, login }) {
  return (
    <Row>
      <Column md={6}>
        <h2>Home</h2>
        {isLoading ? 'loading' : 'stagnant'}
      </Column>
      <Column md={6}>
        <LoginForm
          onSubmit={login}
        />
      </Column>
    </Row>
  )
}

Home.propTypes = {
  isLoading: React.PropTypes.bool.isRequired,
  login: React.PropTypes.func.isRequired,
}

const mapStateToProps = createStructuredSelector({
  isLoading: progressDuck.selectIsProgressing,
})

const mapDispatchToProps = (dispatch) => ({
  login: (fields) => dispatch(authDuck.submitLoginForm(fields)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
