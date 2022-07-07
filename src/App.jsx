import { useEffect } from 'react'
import { useState } from 'react'
import api from './api'
import { Container, Card, Title, Label } from './styles-app'

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
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '135px',
      }}
    >
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
                <li>
                  <Title>{item.title}</Title>
                </li>
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
                  <span style={{ color: '#60401f', fontWeight: 'bold' }}> R$ {item.price} </span>
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

                    <span style={{ color: '#60401f', fontWeight: 'bold' }}>{item.desc}</span>
                  </div>
                </li>
              </ul>
            </Card>
          )
        })}
      </Container>
    </div>
  )
}

export default App
