import { Container } from './style-header'

function Header() {
  return (
    <>
      <Container>
        <a href="#" style={{ textDecoration: 'none' }}>
          HOME
        </a>
        <a href="#" style={{ textDecoration: 'none' }}>
          CADASTRO
        </a>
        <a href="#" style={{ textDecoration: 'none' }}>
          ABOUT
        </a>
      </Container>
    </>
  )
}

export default Header
