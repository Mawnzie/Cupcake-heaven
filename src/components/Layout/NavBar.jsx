import Nav from "react-bootstrap/Nav";
import { Link } from "react-router";
import { Card } from "react-bootstrap";
import "./NavBar.css"; // Import the CSS file for styling
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
function NavBar() {
  return (
    <Navbar bg="light" expand="lg" fixed="top" className="w-100 container-fluid py-0">
      <Nav
      aria-label="Main"
      className="justify-content-center navbar navbar-muted bg-secondary w-100"
      activeKey="/home" expand="lg" fixed="top" >
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/about">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav.Item>
           <Nav.Item>
        <Nav.Link href="/products">Products</Nav.Link>
      </Nav.Item>
      </Nav>
    </Navbar>
  );
}

export default NavBar;

{/*}
function NavBar() {
  return (
      <div className="container-fluid w-100" >
    <Nav
      aria-label="Main"
      className="justify-content-center navbar navbar-secondary bg-light w-100"
      activeKey="/home" expand="lg" fixed="top" 
    >
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/about">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav.Item>
    </Nav>
    </div>
  );
}

export default NavBar; */}
