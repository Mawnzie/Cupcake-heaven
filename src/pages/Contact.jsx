import React from 'react'
import Header from '../components/Header'
import { Container } from 'react-bootstrap'
import Layout from '../components/Layout/Layout'

export default function Contact() {
  return (
    <Layout>
     <Container className="text-center py-2 mt-0">
      {/* <Header /> */}
      <h1 className="display-1 text-center title">  Contact </h1>
    </Container>
    </Layout>
  )
}
