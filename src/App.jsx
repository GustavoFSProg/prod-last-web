import { useEffect } from 'react'
import { useState } from 'react'
import api from './api'
import { Container, Card } from './styles-app'

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
      <h1> Products</h1>
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
                  <h1>{item.title}</h1>
                </li>
                <li>
                  <img width="180" src={item.image} alt="imagem" />
                </li>
                <li>
                  <strong>Preço:</strong>
                  {item.price}
                </li>
                <li>
                  <strong>Descrição:</strong>
                  {item.desc}
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
