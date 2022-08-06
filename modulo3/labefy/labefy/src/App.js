import React from 'react';
import styled from 'styled-components';
import LeftTab from "./Components/LeftTab"

const Header = styled.section`
  text-align: center;
  background-color: #706F6F;
`

const Titulo = styled.h1`
  font-family: sans-serif;
  font-size: xx-large;
`

const Corpo = styled.div`
  background-color: #706F6F;
`

export default function App() {
  return (
    <div className="App">
      <Header>
        <Titulo>Labify</Titulo>
        <h2>✿Seja bem vinde!✿</h2>
      </Header>

      <Corpo>
      <LeftTab 
      nome1="🏠 Home"
      nome2="🔎 Buscar"
      nome3="🎵 Criar playlist"
      />
      </Corpo>
    </div>
  );
}
