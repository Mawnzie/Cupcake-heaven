import React from 'react'
import Header from '../components/Header'
import NameField from '../components/NameField'
import {Row, Col, Container, Button, Alert, Breadcrumb, Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Home.css'
import NavBar from '../components/NavBar'
export default function Home() {
  return ( 
     <Container className="text-center py-2 mt-0" >
<Row>
  <Col>
  <NavBar/>
    </Col>
</Row>

  <Row>
    <Col>
      <h1 className="display-1 text-center title">
        Welcome to CupCake Heaven
      </h1>
      <h2 className="display-3 slogan">Bite into bliss — one cupcake at a time.</h2>
    </Col>
  </Row>
</Container>);

  }
  

{/*
export default function Home() {
  return (
    <>
      <Header />
      <h1>Home</h1>
      <div>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://picsum.photos/200/100" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
    </>
  )
} */}
