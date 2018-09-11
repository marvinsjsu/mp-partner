import App, {Container} from 'next/app'
import React from 'react'
import withMagnifyProgressApollo from '../lib/with-magnify-progress-client'
import { ApolloProvider } from 'react-apollo'

class MagnifyProgress extends App {
  render () {
    const {Component, pageProps, apolloClient} = this.props
    return <Container>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Container>
  }
}

export default withMagnifyProgressApollo(MagnifyProgress)
