import React from "react";
import Header from "../components/Header";
import { Container } from "react-bootstrap";
import Layout from "../components/Layout/Layout";

export default function About() {
  return (
    <Layout>
      <Container className="text-center py-2 mt-0">
        <h1 className="display-1 text-center title"> About us </h1>
      </Container>
    </Layout>
  );
}
