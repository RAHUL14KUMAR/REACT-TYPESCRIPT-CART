import {Container,Nav,Navbar as NavbarBs} from "react-bootstrap"
import {NavLink} from "react-router-dom"
function Navbar() {
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
        <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        </Container>
    </NavbarBs>
  )
}

export default Navbar
