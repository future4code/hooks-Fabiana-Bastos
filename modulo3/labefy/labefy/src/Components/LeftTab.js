import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components'
import axios from 'axios';

const AbaEsq = styled.section`
    background-color: #B0B5B3;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    font-color: #DBDBDB;
    display: flex;
    width: 300px;
  `

const Lista = styled.ul`
  list-style: none;
  `

function LeftTab(props) {
  return(
    <div>
      <AbaEsq>
        <Lista>
          <li><p>{props.nome1}</p></li>
          <li><p>{props.nome2}</p></li>
          <li><p>{props.nome3}</p></li>
        </Lista>
      </AbaEsq>
    </div>
  )
}

export default LeftTab;