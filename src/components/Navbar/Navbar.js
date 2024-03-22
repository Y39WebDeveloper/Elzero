import './Navbar.css'
import { Container, Navigation } from '..'

const Navbar = () => {
  return (
    <nav className="nav-bar" id="nav-bar">
        <Container>
              <a href="/elzero" className="logo">Elzero</a>
              <Navigation/>
        </Container>
    </nav>
  )
}

export default Navbar