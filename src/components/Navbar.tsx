import {Container,Nav,Navbar as NavbarBs} from "react-bootstrap"
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
        <Container>
            <Nav className="me-auto">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/store">Store</Link>
            </Nav>
        </Container>
    </NavbarBs>
  )
}

export default Navbar
