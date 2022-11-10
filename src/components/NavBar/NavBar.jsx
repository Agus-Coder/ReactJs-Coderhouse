import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
    <Link to={"/"}>
      <Navbar.Brand>Aurica</Navbar.Brand>
    </Link>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Link to="/category/mandalas">
          <Nav.Link>Mandalas</Nav.Link>
        </Link>
        <Link to="/category/remeras">
          <Nav.Link>Remeras</Nav.Link>
        </Link>
        <Link to="/about">
          <Nav.Link>About Aurica</Nav.Link>
        </Link>
      </Nav>
      <Nav>
        <Link to={"/cart"}>
          <CartWidget />
        </Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>;

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to={"/"}>
          <Navbar.Brand>Aurica</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/category/mandalas">Mandalas</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/category/remeras">Remeras</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about">About Aurica</Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Link to={"/cart"}>
              <CartWidget />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
