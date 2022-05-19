import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
background-color: pink;
border-style: dashed;
font-size: large;
display: flex;
align-items:center;

`

export default class Lista extends React.Component {
  
  render() {
    return (
      <div>        
        <Button onClick={this.props.onClickirForm}>Adicione usuário</Button>
      </div>
    )
  }
}