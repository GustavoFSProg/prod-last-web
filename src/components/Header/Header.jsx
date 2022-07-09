import { Link } from 'react-router-dom'
import SimpleMenu from '../Menu/menu'
import { Container, LinksContainer } from './style-header'

function Header() {
  return (
    <>
      <Container>
        <SimpleMenu />
        <LinksContainer>
          <Link to="/" style={{ color: 'blue', textDecoration: 'none' }}>
            HOME
          </Link>
          <Link to="/register" style={{ color: 'blue', textDecoration: 'none' }}>
            CADASTRO
          </Link>
          <Link to="/" style={{ color: 'blue', textDecoration: 'none' }}>
            ABOUT
          </Link>
        </LinksContainer>
      </Container>
    </>
  )
}

export default Header
