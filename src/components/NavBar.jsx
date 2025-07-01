import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router';
import {Card} from 'react-bootstrap';
function NavBar() {
  return (

    <Nav aria-label='Main'
      className="justify-content-center navbar navbar-fixed-top" activeKey="/home">

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
  );
}

export default NavBar;