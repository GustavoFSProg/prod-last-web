import { Link } from 'react-router-dom'
import { Container } from './style-header'

function Header() {
  return (
    <>
      <Container>
        <Link to="/" style={{ textDecoration: 'none' }}>
          HOME
        </Link>
        <Link to="/register" style={{ textDecoration: 'none' }}>
          CADASTRO
        </Link>
        <Link to="/" style={{ textDecoration: 'none' }}>
          ABOUT
        </Link>
      </Container>
    </>
  )
}

export default Header
