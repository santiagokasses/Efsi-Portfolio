import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'

function Layout() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/Home' >Home</Nav.Link>
            <Nav.Link as={Link} to='/Info'>Info</Nav.Link>
            <Nav.Link as={Link} to='/MisCreaciones'>Mis Creaciones</Nav.Link>
            <Nav.Link as={Link} to='/Favoritos'>Favoritos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}

export default Layout;