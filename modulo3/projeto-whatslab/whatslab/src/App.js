import React from "react";
import Router from "./Router";
import { createGlobalStyle } from 'styled-components';
import Header from "./Header";
import Footer from "./Footer";

const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(#fffffc, #274046);
    height: 180vh;
  }
`

function App() {
  return (
    <>
      <Header/>
      <GlobalStyle/>
      <Router />
      <Footer/>
    </>
  )
}

export default App;
