import { useEffect } from 'react'
import { useState } from 'react'
import api from './api'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Label, Input, Button, Form } from './styled-register'

function Register() {
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
        <h2> Cadastro</h2>
        <div>
          <Form>
            <Label> Imagem:</Label> <input type="file" />
            <Label>Title:</Label>
            <Input type="text" />
            <Label>Descrição:</Label> <Input type="text" />
            <Label> Preço:</Label> <Input type="text" />
            <Button type="submit">CADASTRAR</Button>
          </Form>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Register
