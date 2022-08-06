import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Button = styled.button`
background-color: pink;
border-style: dashed;
font-size: large;
`

export default class Form extends React.Component {
  state = {
    inputNome: "",
    inputEmail: "",
  };
  addNome = (event) => {
    this.setState({ inputNome: event.target.value });
  };
  addEmail = (event) => {
    this.setState({ inputEmail: event.target.value });
  };
  addUser = () => {
    axios.post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        
        {
          headers: {
            Authorization: "fabiana-bastos-hooks",
          },
        }
      )
      .then((response) => {
        console.log(response.data.result.list)
      })
      .catch((error) => {
        console.log(error.response)
  });
  };
  
  render() {
    return (
      <div>
        <Button onClick={this.props.onClickirEdição}>Novos Usuários</Button>
        <br/>
        <label>Nome: </label>
        <input
            placeholder="insira seu nome"
            value={this.addUser}
            onChange={this.addNome}
          />
          <br/>
          <label>E-mail: </label>
          <input
            placeholder="insira seu e-mail"
            value={this.addUser}
            onChange={this.addEmail}
          />
          <br/>
          <Button onClick={this.addUser} onSubmit={this.addUser}> Adicionar Usuário </Button>
        </div>
    );
  }
}