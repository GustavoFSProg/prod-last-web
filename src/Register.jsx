import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import api from './api'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Label, Input, Button, Form } from './styled-register'

function Register() {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState([])

  const history = useHistory()

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      const data = new FormData()

      data.append('title', title)
      data.append('price', price)
      data.append('desc', desc)
      data.append('image', image)

      await api.post(`/`, data)

      history.push('/')

      return alert('Cadastro realizado com sucesso!')
    } catch (error) {
      console.log(error)
      return alert(`Deu erro no front ${error}`)
    }
  }

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
          <Form onSubmit={handleSubmit}>
            <Label> Imagem:</Label>
            <input type="file" id="image" onChange={(e) => setImage(e.target.files[0])} />
            <Label>Title:</Label>
            <Input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Label>Descrição:</Label>
            <Input id="desc" value={desc} onChange={(e) => setDesc(e.target.value)} />
            <Label> Preço:</Label>
            <Input
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="text"
            />
            <Button type="submit">CADASTRAR</Button>
          </Form>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Register
