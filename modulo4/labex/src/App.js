import React from "react";
import styled from "styled-components";
import Router from "./Router";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(#E6DADA, #274046);
    height: 100vh;
  }
`

const Header = styled.h1`
  color:#5D4157;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  padding: 1em;
  text-align: center;
`

function App() {
  return (
    <>
      <GlobalStyle/>
      <Header>L A B E X</Header>
      <Router />
    </>
  )
}

export default App;
