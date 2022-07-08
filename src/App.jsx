import { useEffect } from 'react'
import { useState } from 'react'
import api from './api'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Container, Card, Title, Label, Item, Li } from './styles-app'

function App() {
  const [products, setProducts] = useState([])

  async function handleProducts() {
    const { data } = await api.get('/get-all')

    setProducts(data)

    return data
  }

  useEffect(() => {
    handleProducts()
  }, [])

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: '135px',
        }}
      >
        <Header />
        <h2> Products</h2>
        <Container>
          {products.map((item) => {
            return (
              <Card key={item.id}>
                <ul
                  style={{
                    listStyle: 'none',
                  }}
                >
                  <br />
                  <Li>
                    <Title>{item.title}</Title>
                  </Li>
                  <li>
                    <img width="180" src={item.image} alt="imagem" />
                  </li>
                  <li
                    style={{
                      marginTop: '15px',
                      display: 'flex',
                      alignItems: 'center',
                      // justifyContent: 'center',
                    }}
                  >
                    <Label>Preço:</Label>
                    <Item> R$ {item.price} </Item>
                  </li>
                  <li>
                    <div
                      style={{
                        marginTop: '10px',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <Label>Descrição:</Label>

                      <Item>{item.desc}</Item>
                    </div>
                  </li>
                </ul>
              </Card>
            )
          })}
        </Container>
      </div>
      <Footer />
    </>
  )
}

export default App
