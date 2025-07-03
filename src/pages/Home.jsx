import React from "react";
import Header from "../components/Header";
import NameField from "../components/NameField";
import {
  Row,
  Col,
  Container,
  Button,
  Alert,
  Breadcrumb,
  Card,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//import "./Home.css";
import NavBar from "../components/Layout/NavBar";
import Layout from "../components/Layout/Layout";
export default function Home() {
  return (
    <Layout>
      <Container className="text-center py-2 mt-0">
      </Container>

      <Container className="text-center py-2 mt-0">
        <h1 className="display-1 text-center title">
          Welcome to CupCake Heaven
        </h1>
      </Container>
      <Container className="text-center py-2 mt-0">
        <h2 className="display-3 slogan">
          Bite into bliss — one cupcake at a time.
        </h2>
      </Container>
      <Container className="text-center py-2 mt-0">
        <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in ligula elit. Aenean egestas nisi consequat enim tincidunt convallis. Morbi et turpis non augue tempus dignissim a et urna. Donec maximus tincidunt purus non sodales. Proin nulla libero, ullamcorper at molestie et, semper eget leo. Nunc varius velit dui. Nam ante ante, sollicitudin in porta in, scelerisque eu magna. Mauris vitae blandit nibh. Nam sodales enim sit amet malesuada semper.


    
        </p>
      </Container>
    </Layout>
  );
}

{
  /*
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
} */
}
