import React, { useState, useRef } from 'react'

import axios from 'axios'

import People from './assest/Consulting_Isometric 1.png'
import arrow from './assest/2.png'
import trash from './assest/18297 4.png'



import {
  Container,
  H1,
  Image,
  ContainerItens,
  InputLabel,
  Input,
  Button,
  User,
} from './styles'


function App() {

  const [users, setUsers] = useState([]);
  const inputName = useRef()
  const inputAge = useRef()



  async function addNewUser() {
    const data = await axios.post("http://localhost:3001/users", { name: inputName.current.value, age: inputAge.current.value })

    console.log(data)




    //setUsers([
    // ...users,
    // {
    //  id: Math.random(),
    //name: inputName.current.value,
    // age: inputAge.current.value,
    //},
    //]);
  }
  function deleteUser(userId) {
    const newUsers = users.filter(user => user.id !== userId)

    setUsers(newUsers)

  }




  return (
    <Container>
      < Image src={People} />
      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder='Nome' />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder='idade' />

        < Button onClick={addNewUser}>
          Cadastrar <img alt="seta" src={arrow} /></Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p>  <p>{user.age}</p>
              <Button on onClick={() => deleteUser(user.id)}>
                <img src={trash} alt="lata-de-lixo" /></Button>
            </User>
          ))}
        </ul>

      </ContainerItens>





    </Container>
  )



}
export default App