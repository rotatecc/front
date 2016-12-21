import React from 'react'
import { connect } from 'react-redux'
import { Row, Column } from 'hedron'

import LoginForm from '@/containers/LoginForm'

import { request, saveAccessToken } from '@/utils'


const handleSubmit = (values) =>
  request({ endpoint: '/auth/login', method: 'post', data: values })
  .then((data) => {
    saveAccessToken(data)
  })
  .catch((error) => {
    console.error(error) // eslint-disable-line no-console
  })

function Home() {
  return (
    <Row>
      <Column md={6}>
        <h2>Home</h2>
      </Column>
      <Column md={6}>
        <LoginForm
          onSubmit={handleSubmit}
        />
      </Column>
    </Row>
  )
}

Home.propTypes = {
  // TODO
}

const mapStateToProps = (/* state */) => ({
  // TODO
})

const mapDispatchToProps = (/* dispatch */) => ({
  // TODO
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
