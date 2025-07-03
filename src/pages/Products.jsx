import React from "react";
import Header from "../components/Header";
import { Container, Row, Col} from "react-bootstrap";
import Layout from "../components/Layout/Layout";
import chocolateImg from "../assets/chocolate.jpg";
import greenImg from "../assets/green.jpg";
import strawberryImg from "../assets/strawberry.jpg";
import "./Products.css";
import DropDown from "../components/DropDown";

export default function Products() {
  return (
    <Layout>
      <Container className="text-center py-2 mt-0">
        <h1 className="display-1 text-center title"> Products </h1>
        <Row>
         <Col>
         <p className="display-6 text-center title"> Chocolate </p>
         <img src={chocolateImg} className="img-thumbnail fixed-image" alt="Cinque Terre"/>  
         </Col>
         <Col>
         <p className="display-6 text-center title"> Green </p>
         <img src={greenImg} className="img-thumbnail fixed-image" alt="Cinque Terre"/>
         </Col>
         <Col>
         <p className="display-6 text-center title"> Strawberry </p>
         <img src={strawberryImg} className="img-thumbnail fixed-image" alt="Cinque Terre"/>
         </Col>
         </Row>
         <Row>
            <Col> <DropDown /></Col>
            <Col> <DropDown /></Col>
            <Col> <DropDown /></Col>
         </Row>
      </Container>
      
    </Layout>
  );
}
